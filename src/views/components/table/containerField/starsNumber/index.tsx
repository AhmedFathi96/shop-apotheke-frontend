import * as styles from "./styles.module.scss";
import SolidStarIcon from "../starIcon"
import { IStarsNumberProps } from "./types";

const StarsNumber: React.FC<IStarsNumberProps> = (
  props: IStarsNumberProps
) => {
    const { numberOfStars } = props;
  return (
    <div className={styles.default.starsNumberWrapper}>
        
        <SolidStarIcon />
        <span className={styles.default.starsNumberWrapper_number}>
          {numberOfStars}
        </span>
    </div>
  );
};

export default StarsNumber;
