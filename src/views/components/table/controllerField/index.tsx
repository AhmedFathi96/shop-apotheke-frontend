import * as styles from "./styles.module.scss";
import RegularStarIcon from "./starReqIcon";
import { IControllerFiled } from "./types";
import { useEffect, useState } from "react";
import { getStarredRepos } from './../../../../store/slices/repositories/selectors';

const ControllerField:React.FC<IControllerFiled> = (props:IControllerFiled) =>{
  const { id,toggleStarRepo } = props;
  const [toggleStar,setToggleStar] = useState<boolean>(getStarredRepos(id)); 
  useEffect(()=>{
    // console.log("toggleStar================>",id,toggleStar)
    toggleStarRepo(id,toggleStar)
  },[toggleStar])
  return (
      <div className={styles.default.controllerFieldWrapper}>
        <div className="" onClick={()=>{
                  setToggleStar(state=>!state)
        }}>
        <RegularStarIcon clicked={toggleStar}/>
        </div>
             
      </div>

  );
}

export default ControllerField;
