import { useEffect, useState } from "react";
import * as styles from "./styles.module.scss";
import { IDateTableProps, IPlainObject, tableFieldTypes } from "./types";
import { TableLoading } from "./tableLoading";
import { TableEmpty } from "./tableEmpty";
import ContainerField from "./containerField";
import { getByKeysStringURL } from "../../../utils/getValueByKeysString";
import DateField from "./dateField";
import { ToastContainer } from 'react-toastify';
import ConnectedController from "./controllerField/connectedController";

const DataTable:React.FC<IDateTableProps> = (props: IDateTableProps) => {
  const [tableData, setTableData] = useState<IPlainObject[]>([]);
  useEffect(() => {
    setTableData(
      props.data.map((record: any) => {
        const cleanedProps = [];
        for (const column of props.columns) {
          let dataItem: string | string[];
          if (typeof column.props === "string") {
            dataItem = getByKeysStringURL(record, column.props, "-");
          } else {
            dataItem = [];
            for (const prop of column.props)
              dataItem.push(getByKeysStringURL(record, prop, "-"));
          }
          const width = column.width;
          const type = column.type;
          const key = record.id + column.props;
          const id = record[props.recordsIdPropName];
          const setChildren = column.setChildren;
          let moreProps: any[] | undefined;
          if (props.moreProps) {
            moreProps = [];
            for (const additionalProp of props.moreProps as string[]) {
              moreProps.push(getByKeysStringURL(record, additionalProp, "-"));
            }
          }

          cleanedProps.push({
            key,
            id,
            dataItem,
            width,
            type,
            setChildren,
            moreProps,
          });
        }
        return cleanedProps;
      })
    );
  }, [props.data, props.columns]);
  return (
    <div className={styles.default.table}>
      <div className={styles.default.table_head}>
        {props.columns.map((column: any) => {
          return (
            <div
              data-testid="column-label"
              key={column.label}
              className={styles.default.table_head_label}
              style={{ width: column.width }}
            >
              <span>{column.label}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.default.table_body}>
        {props.isLoading ? <TableLoading /> : null}
        {(!props.isLoading &&
          tableData.length === 0 &&
          !props.isFilterActive) ||
        props.columns.length === 0 ? (
          <TableEmpty
            emptyText={props.emptyText}
            emptySubText={props.emptySubText}
            refresh={props.refresh}
            icon={props.emptyIcon}
          />
        ) : null}
        {props.isFilterActive &&
        tableData.length === 0 &&
        !props.isLoading &&
        props.columns.length !== 0 ? (
          <TableEmpty
            filter={true}
            filterText={props.emptyFilterText}
            resetFilters={props.onResetClick}
            setPage={props.onSetPaginationPage}
            icon={props.emptyFilterIcon}
          />
        ) : null}
        {!props.isLoading && tableData.length > 0 && props.columns.length > 0
          ? tableData.map((tableItem) => {
              return (
                <div
                  key={tableItem[0].key}
                  className={styles.default.table_body_row}
                  onClick={() => {
                    props.rowClick(tableItem[0].id, tableItem[0].moreProps);
                  }}
                >
                  {tableItem.map((property: any) => {
                    return (
                      <div
                        key={property.dataItem + property.key + property.type}
                        className={styles.default.table_body_row_data}
                        style={{ width: property.width }}
                      >
                        {property.type === tableFieldTypes.date ? (
                          <DateField
                            date={
                              Array.isArray(property.dataItem)
                                ? property.dataItem[0]
                                : property.dataItem
                            }
                            dayFirst={
                              Array.isArray(property.dataItem) &&
                              property.dataItem[1]
                                ? true
                                : false
                            }
                          />
                        ) : null}
                        {property.type === tableFieldTypes.text ? (
                          <span>
                            {!property.dataItem || property.dataItem === ""
                              ? "-"
                              : property.dataItem}
                          </span>
                        ) : null}
                        
                        

                      
                        
                        {property.type === tableFieldTypes.container ? (
                          <ContainerField data={property.dataItem} />
                            
                        ) : null}

                        {property.type === tableFieldTypes.controller ? (
                          <ConnectedController id={tableItem[0].id} />
                            
                        ) : null}
                        
                        
                      </div>
                    );
                  })}
                </div>
              );
            })
          : null}
          <ToastContainer />
      </div>
    </div>
  );
}

export default DataTable;
