import { connect } from "react-redux";
import {
  clearFilter,
  registerFilter,
  setPaginationPage,
  unregisterFilter,
  updateFilterValue,
} from "../../../../store/slices/tableControls/tabelControlsSlice";
import { AppDispatch, RootState } from "../../../../store/types";
import DropDownSelectFilter from ".";
import {
  IDropDownSelectFilterDispatchProps,
  IDropDownSelectFilterOwnProps,
  IDropDownSelectFilterStateProps,
} from "./types";
import {
  getDropDownFilterFirstSelect,
  getFilterSelectedSingleValues,
} from "../../../../store/slices/tableControls/selectors";
const mapStateToProps = (
  state: RootState,
  ownProps: IDropDownSelectFilterOwnProps
): IDropDownSelectFilterStateProps => ({
  filterLabel: ownProps.filterLabel,
  filterName: ownProps.filterName,
  options: ownProps.options,
  firstSelected: getDropDownFilterFirstSelect(
    state,
    ownProps.filterName,
    ownProps.options
  ),
  selectedValue: getFilterSelectedSingleValues(state, ownProps.filterName),
  //
});

const mapDispatchToProps = (
  dispatch: AppDispatch
): IDropDownSelectFilterDispatchProps => {
  return {
    onClearFilter: (filterName: string) => {
      dispatch(clearFilter(filterName));
    },
    onSelection: (filterName: string, value: string, isDelete: boolean) => {
      dispatch(
        updateFilterValue({ filterName, value, isDelete, isSingleValue: true })
      );
    },
    onComponentMount: (filterName: string) => {
      dispatch(
        registerFilter({ name: filterName, filter: { selectedValues: [] } })
      );
    },
    onComponentUnmount: (filterName: string) => {
      dispatch(unregisterFilter(filterName));
    },
    onSetPaginationPage: (val: number) => {
      dispatch(setPaginationPage(val));
    },
  };
};

export const ConnectedDropDownSelectFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDownSelectFilter);
export default ConnectedDropDownSelectFilter;
