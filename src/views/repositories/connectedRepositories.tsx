import { connect } from "react-redux";
import Repositories from ".";
import { resetRepositoriesRecords, 
} from "../../store/slices/repositories/repositoriesSlice";
import { getIsRepositoriesRecordsLoaded, 
    getRepositoriesRecords, 
} from "../../store/slices/repositories/selectors";
import { getRepositoriesRecordsThunk } from "../../store/slices/repositories/thunks";
import { paginationPageNumberSelector, getFilterValue, getIsFilterationChanged } from "../../store/slices/tableControls/selectors";
import { clearPagination, setIsFiltrationChanged } from "../../store/slices/tableControls/tabelControlsSlice";
import { AppDispatch, 
    RootState 
} from "../../store/types";

import { IRepositoriesDispatchProps, 
    IRepositoriesStateProps 
} from "./types";




const mapStateToProps = (state: RootState): IRepositoriesStateProps => ({
  data: getRepositoriesRecords(state),
  isDataLoaded: getIsRepositoriesRecordsLoaded(state),
  pageNumber: paginationPageNumberSelector(state),
  getLanguageValue: getFilterValue(state, "language"),
  isFilterChanged: getIsFilterationChanged(state),
});
const mapDispatchToProps = (dispatch: AppDispatch): IRepositoriesDispatchProps => ({
  onLoadData: (isRefresh: boolean) =>
    dispatch(getRepositoriesRecordsThunk(isRefresh)),

  onResetPagination: () => dispatch(clearPagination()),
  onResetRepositoriesRecords: () => {
    dispatch(resetRepositoriesRecords());
    dispatch(setIsFiltrationChanged(false));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
