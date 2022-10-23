import { Link } from "react-router-dom";
import * as styles from "./styles.module.scss";
import { tableBtnStyles } from "./types";

export function TableButton(props: any) {
  return props.link ? (
    <Link
      to={props.to}
      className={[
        styles.default.tableButton,
        props.style === tableBtnStyles.outline
          ? styles.default.tableButton_outline
          : null,
        props.style === tableBtnStyles.primary
          ? styles.default.tableButton_primary
          : null,
        props.style === tableBtnStyles.secondary
          ? styles.default.tableButton_secondary
          : null,
      ].join(" ")}
    >
      {props.children}
    </Link>
  ) : (
    <button
      onClick={props.click}
      className={[
        styles.default.tableButton,
        props.style === tableBtnStyles.outline
          ? styles.default.tableButton_outline
          : null,
        props.style === tableBtnStyles.primary
          ? styles.default.tableButton_primary
          : null,
        props.style === tableBtnStyles.secondary
          ? styles.default.tableButton_secondary
          : null,
      ].join(" ")}
    >
      {props.children}
    </button>
  );
}

export default TableButton;
