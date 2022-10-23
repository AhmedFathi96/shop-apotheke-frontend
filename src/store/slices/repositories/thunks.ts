import { createAsyncThunk } from "@reduxjs/toolkit";
import { RepositoriesRequests } from "../../../services/repositories";
import { IRepository, IResponse } from "../../../services/types";
import { RootState } from "../../types";
import { getFilterValue, paginationPageNumberSelector } from "../tableControls/selectors";
import { setPaginationData } from "../tableControls/tabelControlsSlice";
import { toggleIsRepositoriesDataLoaded } from "./repositoriesSlice";
import { IReposFilter } from "./types";

export const getRepositoriesRecordsThunk = createAsyncThunk(
    "repositories/getRecords",
    async (isRefresh: boolean, thunkAPI): Promise<IRepository[]> => {

      thunkAPI.dispatch(toggleIsRepositoriesDataLoaded(false));
      const rootState: RootState = thunkAPI.getState() as RootState;

      const language = getFilterValue(rootState, "language");
      const page = paginationPageNumberSelector(rootState)
      const filters: IReposFilter = {
        language,
        q:"created:>2017-01-10",
        sort:"stars",
        order:"desc",
        per_page:10,
        page
      };
      const res:IResponse = await RepositoriesRequests.getAllRepos(filters);
      const { items,total_count } = res.data;
      if (items) {
        const paginationData = {
          pageNumber: page,
          totalPages: Math.ceil(total_count/10),
          totalRecords: total_count,
        };
        thunkAPI.dispatch(setPaginationData(paginationData));
        return items;
      }
      thunkAPI.dispatch(toggleIsRepositoriesDataLoaded(true));
      return Promise.reject();
    }
  );