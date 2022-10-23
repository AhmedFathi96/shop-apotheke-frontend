
export interface IDropDownOption {
  label: string;
  value: string;
}

export interface IDropDownSelectFilterStateProps {
  filterName: string;
  filterLabel: string;
  options: IDropDownOption[];
  selectedValue?: string | string;
  firstSelected?: IDropDownOption;
}

export interface IDropDownSelectFilterDispatchProps {
  onClearFilter: (filterName: string) => void;
  onSelection: (filterName: string, value: string, isDelete: boolean) => void;
  onComponentMount: (filterName: string) => void;
  onComponentUnmount: (filterName: string) => void;
  onSetPaginationPage: (val: number) => void;
}

export interface IDropDownSelectFilterOwnProps {
  filterName: string;
  filterLabel: string;
  options: IDropDownOption[];
  hidFilter?: boolean;
}

export interface IDropDownSelectFilterProps
  extends IDropDownSelectFilterStateProps,
    IDropDownSelectFilterDispatchProps {}
