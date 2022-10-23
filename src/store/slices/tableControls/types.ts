
export interface IFilterState {
  value?: string;
  selectedValues?: string[];

}
export interface IFilterRecord {
  name: string;
  filter: IFilterState;
}
export interface ITablePagination {
  pageNumber: number;
  pageUINumber: number;
  totalPages: number;
  totalRecords: number;
  paginationUIShownPages: (number | string)[];
  resultsFrom: number;
  resultsTo: number;
}


export interface ITableControlsState {
  filters?: IFilterRecord[];
  pagination: ITablePagination;
  isFilterChanged: boolean;
}

