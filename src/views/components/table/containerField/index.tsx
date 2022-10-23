import * as styles from "./styles.module.scss";
import { IContainerFieldProps } from "../types";
import StarsNumber from "./starsNumber";

export function ContainerField(props: IContainerFieldProps) {
  const { data } = props;
  return <div className={styles.default.containerField}>
      <StarsNumber numberOfStars={data} />
    </div>;
}

export default ContainerField;
