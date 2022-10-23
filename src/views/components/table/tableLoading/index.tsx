import * as styles from "./styles.module.scss";
import ReactLoading from "react-loading";

export function TableLoading() {
  return (
    <div className={styles.default.tableLoading}>
      <ReactLoading type={"bubbles"} color="#991B1B" />
    </div>
  );
}
