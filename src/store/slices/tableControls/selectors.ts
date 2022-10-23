import { IDropDownOption } from "../../../views/components/table/dropDownSelect/types";
import { RootState } from "../../types";



export const getFilterSelectedValues = (
  state: RootState,
  filterName: string
): string[] => {
  const filterData = state.tableControls.filters?.find(
    (filter) => filter.name === filterName
  );
  if (filterData) {
    return filterData.filter.selectedValues || [];
  }
  return [];
};

export const getFilterSelectedSingleValues = (
  state: RootState,
  filterName: string
): string => {
  const filterData = state.tableControls.filters?.find(
    (filter) => filter.name === filterName
  );
  if (filterData) {
    return filterData.filter.value || "";
  }
  return "";
};


export const getFilterValue = (
  state: RootState,
  filterName: string
): string => {
  const filterData = state.tableControls.filters?.find(
    (filter) => filter.name === filterName
  );
  if (filterData) {
    return filterData.filter.value || "";
  }
  return "";
};

export const filterGroupShowResetSelector = (state: RootState): boolean => {
  if (!state.tableControls.filters) {
    return false;
  }
  return (
    state.tableControls.filters.filter(
      (filter) =>
        (filter.filter.selectedValues &&
          filter.filter.selectedValues?.filter((value) => value !== "").length >
            0) ||
        (filter.filter.value && filter.filter.value !== "")
    ).length > 0
  );
};


export const paginationUIPageNumberSelector = (state: RootState): number => {
  return state.tableControls.pagination.pageUINumber;
};

export const paginationPageNumberSelector = (state: RootState): number => {
  return state.tableControls.pagination.pageNumber;
};

export const paginationTotalPagesSelector = (state: RootState): number => {
  return state.tableControls.pagination.totalPages;
};

export const paginationTotalRecordsSelector = (state: RootState): number => {
  return state.tableControls.pagination.totalRecords;
};

export const paginationResultsFromSelector = (state: RootState): number => {
  return state.tableControls.pagination.resultsFrom;
};

export const paginationResultsToSelector = (state: RootState): number => {
  return state.tableControls.pagination.resultsTo;
};

export const paginationUIShownPagesSelector = (
  state: RootState
): (number | string)[] => {
  return state.tableControls.pagination.paginationUIShownPages;
};

export const getIsFilterationChanged = (state: RootState): boolean =>
  state.tableControls.isFilterChanged;




export const getDropDownFilterFirstSelect = (
  state: RootState,
  filterName: string,
  filterOptions: IDropDownOption[]
): IDropDownOption | undefined => {
  if (!state.tableControls.filters) {
    return undefined;
  }
  const filterData = state.tableControls.filters?.find(
    (filter) => filter.name === filterName
  );
  if (filterData) {
    return filterOptions.find(
      (option) => option.value === filterData.filter.value
    );
  }
  return undefined;
};
