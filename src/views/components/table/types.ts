import { ReactChild } from "react";

export interface IPlainObject {
  [key: string]: any;
}


export interface IDateTableColumn {
  label: string;
  props: string | string[];
  width: string;
  type: tableFieldTypes;
  setChildren?: (value: any) => any;
}

export interface IDateTableStateProps {}

export interface IDateTableDispatchProps {
  onResetClick?: () => void;
  onSetPaginationPage?: (val: number) => void;
}

export interface IDateTableProps
  extends IDateTableStateProps,
    IDateTableDispatchProps {
      isLoading: boolean;
      data: any;
      columns: IDateTableColumn[];
      isFilterActive: boolean;
      emptyFilterText?: string;
      emptyText?: string;
      emptySubText?: string;
      refresh?: () => void;
      recordsIdPropName: string;
      moreProps?: string[];
      rowClick: (val: string, moreData?: any[]) => void;
      emptyIcon?: () => JSX.Element;
      emptyFilterIcon?: () => JSX.Element;
}



export interface IDateFieldProps {
  date: string;
  dayFirst?: boolean;
}


export enum tableFieldTypes {
  text,
  date,
  container,
  controller
}

export interface ITableEmptyProps {
  filter?: boolean;
  filterText?: string;
  emptyText?: string;
  emptySubText?: string;
  refresh?: () => void;
  resetFilters?: () => void;
  setPage?: (val: number) => void;
  icon?: () => JSX.Element;
}

export interface IContainerFieldProps {
  data: any;
}





