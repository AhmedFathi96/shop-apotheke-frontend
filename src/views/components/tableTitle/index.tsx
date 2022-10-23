import { useEffect, useState } from "react";
import ConnectedDropDownSelectFilter from "../table/dropDownSelect/connectedDropDownSelectFilter";
import { languageFilter } from "./filter";
import * as styles from "./styles.module.scss";
import { ITableTitleProps } from "./types";
const TableTitle:React.FC<ITableTitleProps> = (props: ITableTitleProps) =>{
  const { title } = props

  return (
    <div className={styles.default.tableTitle}>
      <h2 className={styles.default.tableTitle_title}>{title}</h2>
      <div className={styles.default.tableTitle_actions}>
        {props.children}
      </div>
      <div className={styles.default.tableTitle_filter}>
        <ConnectedDropDownSelectFilter
          filterName="language"
          filterLabel="Language"
          options={languageFilter}
        />
      </div>

      
    </div>
  );
}

export default TableTitle;
