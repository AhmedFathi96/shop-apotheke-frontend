import { IRepository } from "../../../services/types";

export interface IRepositoryState{
    repos:IRepository[];
    isReposLoaded:boolean;
}
export interface IReposFilter{
    language?:string;
    q:string;
    sort:string;
    order:string;
    per_page:number;
    page:number;
}
