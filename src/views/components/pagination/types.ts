export interface IPaginationStateProps {
  pageNumber: number;
  totalPages: number;
  totalRecords: number;
  resultsFrom: number;
  resultsTo: number;
  shownPages: (number | string)[];
}

export interface IPaginationDispatchProps {
  onSetPaginationUIShownPages: () => void;
  onSetPaginationPage: (val: number) => void;
  onSetNextPaginationPage: () => void;
  onSetPrevPaginationPage: () => void;
  onSetPaginationResultsFromAndTo: () => void;
}

export interface IPaginationButtonProps {
  pageNumber: number | string;
  buttonNumber?: number | string;
  totalPages: number;
  type: paginationButtonTypes;
  click?: () => void;
}

export enum paginationButtonTypes {
  number,
  prev,
  next,
}

export interface IPaginationProps
  extends IPaginationStateProps,
    IPaginationDispatchProps {
  isData: boolean;
  isLoading: boolean;
}
