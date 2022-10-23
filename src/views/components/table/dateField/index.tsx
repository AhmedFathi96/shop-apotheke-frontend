import * as styles from "./styles.module.scss";
import { IDateFieldProps } from "../types";
import DateAndTime from "../../../../utils/DateAndTime";

export function DateField(props: IDateFieldProps) {
  return (
    <div className={styles.default.dateField}>
      <span className={styles.default.dateField_date}>
        {props.date && props.date.includes("/")
          ? DateAndTime.getDate(props.date, true, props.dayFirst)
          : DateAndTime.getDate(props.date, false, props.dayFirst)}
      </span>
      <span className={styles.default.dateField_time}>
        {props.date && props.date.includes("/")
          ? DateAndTime.getTime(props.date, true, props.dayFirst)
          : DateAndTime.getTime(props.date, false, props.dayFirst)}
      </span>
    </div>
  );
}

export default DateField;
