import { BrowserRouter } from "react-router-dom";
import { RootState } from "../store/types";
import { AnyAction, AsyncThunkAction, configureStore } from "@reduxjs/toolkit";
import reducers from "../store/slices";
import React, { ReactElement } from "react";
import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
export interface selectorTest {
  dispatch: (action: AnyAction | AsyncThunkAction<any, any, any>) => void;
  fromState: (
    selector: (state: RootState, ...rest: any[]) => any,
    ...params: any[]
  ) => any;
  dispatchSpy: jest.SpyInstance;
}

export interface connectedComponetTest {
  dispatch: (action: AnyAction | AsyncThunkAction<any, any, any>) => void;
  fromState: (selector: (state: RootState) => any) => any;
  wrapper: RenderResult;
  dispatchSpy: jest.SpyInstance;
}

export function createSelectorTest(): selectorTest {
  const store = configureStore({
    reducer: reducers,
  });

  const dispatchSpy = jest.spyOn(store, "dispatch");

  function dispatch(action: AnyAction | AsyncThunkAction<any, any, any>) {
    return store.dispatch(action);
  }

  function fromState(
    selector: (state: RootState, ...rest: any[]) => any,
    ...params: any[]
  ) {
    return selector(store.getState(), ...params);
  }

  return {
    dispatch,
    fromState,
    dispatchSpy,
  };
}

export function createCompoentTest(Component: ReactElement): RenderResult {
  return render(
    <>
      <BrowserRouter>{Component}</BrowserRouter>
    </>
  );
}

export function createConnectedComponentTest(
  Component: ReactElement
): connectedComponetTest {
  const store = configureStore({
    reducer: reducers,
  });
  const dispatchSpy = jest.spyOn(store, "dispatch");
  const wrapper = render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>{Component}</BrowserRouter>
      </Provider>
    </React.StrictMode>
  );

  async function dispatch(action: AnyAction | AsyncThunkAction<any, any, any>) {
    return await store.dispatch(action);
  }

  async function fromState(selector: (state: RootState) => any) {
    return await selector(store.getState());
  }

  return {
    dispatch,
    fromState,
    wrapper,
    dispatchSpy,
  };
}
