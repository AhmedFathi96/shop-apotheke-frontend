import { IRepository } from "../../../services/types";
import LocalStorageService from "../../../utils/localStorageService";
import { RootState } from "../../types";


export const getRepositoriesRecords = (state:RootState):IRepository[] => 
  state.repositories.repos;

export const getIsRepositoriesRecordsLoaded = (state: RootState): boolean =>
  state.repositories.isReposLoaded;

export const getStarredRepos = (id:string):boolean => {
  if(LocalStorageService.get("starredRepos") === null){
    LocalStorageService.set("starredRepos",[])
  }
  const ret = LocalStorageService.get("starredRepos").find((star:string) => star===id) 
  return ret === undefined?false:true
}

