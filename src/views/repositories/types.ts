import { IRepository } from "../../services/types";

export interface IRepositoriesStateProps {
    data: IRepository[];
    isDataLoaded: boolean;
    pageNumber: number;
    getLanguageValue: string;
    isFilterChanged: boolean;
  }
  
  export interface IRepositoriesDispatchProps {
    onLoadData: (val: boolean) => void;
    onResetPagination: () => void;
    onResetRepositoriesRecords: () => void;
  }
  
  export interface IRepositoriesProps
    extends IRepositoriesStateProps,
      IRepositoriesDispatchProps {}
  