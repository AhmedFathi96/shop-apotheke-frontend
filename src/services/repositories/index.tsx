import axios from "axios";
import { IReposFilter } from "../../store/slices/repositories/types";
import { IResponse } from "../types";

export const RepositoriesRequests = {
  getAllRepos(filter:IReposFilter): Promise<IResponse> {
    return axios.get(`https://api.github.com/search/repositories?q=${filter.q}&sort=${filter.sort}/&order=${filter.order}&per_page=${filter.per_page}&page=${filter.page}&language=${filter.language}`);
  },
};
