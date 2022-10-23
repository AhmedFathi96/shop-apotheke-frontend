import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ITableControlsState,
  IFilterRecord,
} from "./types";

const tableControlsInitialState: ITableControlsState = {
  filters: [],
  pagination: {
    pageNumber: 0,
    pageUINumber: 1,
    totalPages: 0,
    totalRecords: 0,
    paginationUIShownPages: [],
    resultsFrom: 0,
    resultsTo: 0,
  },
  isFilterChanged: false,
};

const tableControlsSlice = createSlice({
  name: "tableControlsSlice",
  initialState: tableControlsInitialState,
  reducers: {
    registerFilter(state, action: PayloadAction<IFilterRecord>) {
      state.filters?.push(action.payload);
    },
    unregisterFilter(state, action: PayloadAction<string>) {
      const index = state.filters?.findIndex(
        (filter) => filter.name === action.payload
      );
      if (index !== -1) {
        state.filters?.splice(index as number, 1);
      }
    },
    clearFilter(state, action: PayloadAction<string>) {
      const filterData = state.filters?.find(
        (filter) => filter.name === action.payload
      );
      if (filterData) {
        filterData.filter.value = "";
      }
    },
    updateFilterValue(
      state,
      action: PayloadAction<{
        filterName: string;
        value: string;
        isDelete: boolean;
        isSingleValue?: boolean;
      }>
    ) {
      state.isFilterChanged = true;
      const filterData = state.filters?.find(
        (filter) => filter.name === action.payload.filterName
      );
      if (filterData) {
        if (!action.payload.isDelete || action.payload.isSingleValue) {
          action.payload.isSingleValue
            ? (filterData.filter.value = action.payload.value)
            : filterData.filter.selectedValues?.push(action.payload.value);
        } else {
          const index = filterData.filter.selectedValues
            ? filterData.filter.selectedValues?.indexOf(action.payload.value)
            : -1;
          if (index !== -1) {
            filterData.filter.selectedValues?.splice(index, 1);
          }
        }
      }
    },
    clearAllFilters(state) {
      state.filters?.forEach((filter) => {
        filter.filter.value = "";
      });
    
      state.isFilterChanged = true;
    },
    // pagination
    clearPagination(state) {
      state.pagination = {
        pageNumber: 0,
        pageUINumber: 1,
        totalPages: 0,
        totalRecords: 0,
        paginationUIShownPages: [],
        resultsFrom: 0,
        resultsTo: 0,
      };
    },
    setPaginationData(
      state,
      action: PayloadAction<{
        pageNumber: number;
        totalPages: number;
        totalRecords: number;
      }>
    ) {
      state.pagination.pageNumber = action.payload.pageNumber;
      state.pagination.pageUINumber = action.payload.pageNumber + 1;
      state.pagination.totalPages = action.payload.totalPages;
      state.pagination.totalRecords = action.payload.totalRecords;
    },
    setPaginationPage(state, action: PayloadAction<number>) {
      state.pagination.pageNumber = action.payload - 1;
      state.pagination.pageUINumber = action.payload;
      state.isFilterChanged = true;
    },
    setNextPaginationPage(state) {
      state.pagination.pageNumber = state.pagination.pageNumber + 1;
      state.pagination.pageUINumber = state.pagination.pageUINumber + 1;
    },
    setPrevPaginationPage(state) {
      state.pagination.pageNumber = state.pagination.pageNumber - 1;
      state.pagination.pageUINumber = state.pagination.pageUINumber - 1;
    },
    setPaginationResultsFromAndTo(state) {
      if (state.pagination.pageUINumber === state.pagination.totalPages) {
        state.pagination.resultsFrom =
          (state.pagination.pageUINumber - 1) * 10 + 1;
        state.pagination.resultsTo =
          (state.pagination.pageUINumber - 1) * 10 +
          (state.pagination.totalRecords % 10);
      } else {
        state.pagination.resultsFrom =
          (state.pagination.pageUINumber - 1) * 10 + 1;
        state.pagination.resultsTo =
          (state.pagination.pageUINumber - 1) * 10 + 10;
      }
      state.isFilterChanged = true;
    },
    setPaginationUIShownPages(state) {
      const pagesArray: (number | string)[] = [];
      if (state.pagination.totalPages <= 5) {
        for (let i = 1; i <= state.pagination.totalPages; i++) {
          pagesArray.push(i);
        }
        state.pagination.paginationUIShownPages = [...pagesArray];
      } else if (state.pagination.totalPages === 6) {
        for (let i = 1; i <= 6; i++) {
          pagesArray.push(i);
        }
        state.pagination.paginationUIShownPages = [...pagesArray];
      } else if (
        state.pagination.pageUINumber < 5 &&
        state.pagination.totalPages > 5
      ) {
        for (let i = 1; i <= 5; i++) {
          pagesArray.push(i);
        }
        state.pagination.paginationUIShownPages = [
          ...pagesArray,
          "...",
          state.pagination.totalPages,
        ];
      } else if (
        state.pagination.pageUINumber > state.pagination.totalPages - 4 &&
        state.pagination.totalPages > 6
      ) {
        for (
          let i = state.pagination.totalPages - 4;
          i < state.pagination.totalPages + 1;
          i++
        ) {
          pagesArray.push(i);
        }
        state.pagination.paginationUIShownPages = [1, "...", ...pagesArray];
      } else {
        for (
          let i = state.pagination.pageUINumber - 1;
          i <= state.pagination.pageUINumber + 1;
          i++
        ) {
          pagesArray.push(i);
        }
        state.pagination.paginationUIShownPages = [
          1,
          "...",
          ...pagesArray,
          "...",
          state.pagination.totalPages,
        ];
      }
    },
   
    setIsFiltrationChanged(state, action: PayloadAction<boolean>) {
      state.isFilterChanged = action.payload;
    },
  },
});

export const {
  registerFilter,
  unregisterFilter,
  clearFilter,
  updateFilterValue,
  clearAllFilters,
  setPaginationData,
  setPaginationPage,
  setNextPaginationPage,
  setPrevPaginationPage,
  setPaginationUIShownPages,
  setPaginationResultsFromAndTo,
  clearPagination,
  setIsFiltrationChanged,
} = tableControlsSlice.actions;
export default tableControlsSlice.reducer;
