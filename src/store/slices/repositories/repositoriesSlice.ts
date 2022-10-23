import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRepositoriesRecordsThunk } from "./thunks";
import { IRepositoryState } from "./types";

export const repositoriesInitialState: IRepositoryState = {
  repos:[],
  isReposLoaded:false,
};
const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: repositoriesInitialState,
  reducers: {
    toggleIsRepositoriesDataLoaded(state, action: PayloadAction<boolean>) {
      state.isReposLoaded = action.payload;
    },
    resetRepositoriesRecords(state) {
      state.repos = [];
      state.isReposLoaded = false;
    },
    
  },
  
  extraReducers: (builder) => {
    builder.addCase(getRepositoriesRecordsThunk.fulfilled, (state, action) => {
      state.repos = action.payload;
      state.isReposLoaded = true;
    });
  },
});
export const { 
  toggleIsRepositoriesDataLoaded,
  resetRepositoriesRecords,
   } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
