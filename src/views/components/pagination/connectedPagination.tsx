import { connect } from "react-redux";
import {
  paginationTotalPagesSelector,
  paginationTotalRecordsSelector,
  paginationUIPageNumberSelector,
  paginationResultsFromSelector,
  paginationResultsToSelector,
  paginationUIShownPagesSelector,
} from "../../../store/slices/tableControls/selectors";
import {
  setNextPaginationPage,
  setPrevPaginationPage,
  setPaginationResultsFromAndTo,
  setPaginationUIShownPages,
  setPaginationPage,
} from "../../../store/slices/tableControls/tabelControlsSlice";
import { AppDispatch, RootState } from "../../../store/types";
import Pagination from "./pagination";
import { IPaginationDispatchProps, IPaginationStateProps } from "./types";

const mapStateToProps = (state: RootState): IPaginationStateProps => ({
  pageNumber: paginationUIPageNumberSelector(state),
  totalPages: paginationTotalPagesSelector(state),
  totalRecords: paginationTotalRecordsSelector(state),
  resultsFrom: paginationResultsFromSelector(state),
  resultsTo: paginationResultsToSelector(state),
  shownPages: paginationUIShownPagesSelector(state),
});

const mapDispatchToProps = (
  dispatch: AppDispatch
): IPaginationDispatchProps => {
  return {
    onSetPaginationUIShownPages: () => {
      dispatch(setPaginationUIShownPages());
    },
    onSetPaginationPage: (val: number) => {
      dispatch(setPaginationPage(val));
    },
    onSetNextPaginationPage: () => {
      dispatch(setNextPaginationPage());
    },
    onSetPaginationResultsFromAndTo: () => {
      dispatch(setPaginationResultsFromAndTo());
    },
    onSetPrevPaginationPage: () => {
      dispatch(setPrevPaginationPage());
    },
  };
};

export const ConnectedPagination = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
export default ConnectedPagination;
