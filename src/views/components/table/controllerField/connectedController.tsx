import { connect } from "react-redux";
import ControllerField from ".";
import { AppDispatch, RootState } from "../../../../store/types";
import LocalStorageService from "../../../../utils/localStorageService";
import { IControllerFiledDispatchProps, IControllerFiledStateProps } from "./types";

const mapStateToProps = (state: RootState): IControllerFiledStateProps => ({});
const mapDispatchToProps = (
  dispatch: AppDispatch
): IControllerFiledDispatchProps => ({
    toggleStarRepo:(id,isStarred) =>{

    

    if(isStarred){
      let starredRepos:string[] = LocalStorageService.get("starredRepos");
      let isRepoExists = starredRepos.find(star => star === id);
      console.log("isRepoExists =============>",id,isRepoExists)
      if(!isRepoExists){
        starredRepos.push(id);
        LocalStorageService.set("starredRepos",starredRepos)
      }
    }else{
      let starredRepos:string[] = LocalStorageService.get("starredRepos") || [];
      starredRepos = starredRepos.filter(star => star !== id);
      LocalStorageService.set("starredRepos",starredRepos);

        
        
    }
    
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ControllerField);
