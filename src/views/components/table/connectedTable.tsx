import { connect } from "react-redux";
import DataTable from ".";
import { clearAllFilters, setPaginationPage } from "../../../store/slices/tableControls/tabelControlsSlice";
import { AppDispatch, RootState } from "../../../store/types";
import { IDateTableStateProps, IDateTableDispatchProps } from "./types";


const mapStateToProps = (state: RootState): IDateTableStateProps => ({});
const mapDispatchToProps = (
  dispatch: AppDispatch
): IDateTableDispatchProps => ({
  onResetClick: () => {
    dispatch(clearAllFilters());
  },
  onSetPaginationPage: (val: number) => {
    dispatch(setPaginationPage(val));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
