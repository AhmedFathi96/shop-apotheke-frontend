import React, { useEffect } from "react";
import TableTitle from "../components/tableTitle";
import { IRepositoriesProps } from "./types";
import ConnectedDataTable from '../components/table'
import ConnectedPagination from "../components/pagination/connectedPagination";
import repositoriesTableColumns from "./repositoriesTableColumns";

import * as styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Repositories:React.FC<IRepositoriesProps> = (props:IRepositoriesProps) =>{
    const { isFilterChanged, 
        pageNumber, 
        onLoadData, 
        getLanguageValue, 
        onResetPagination, 
        onResetRepositoriesRecords} = props;
    useEffect(() => {
        if (isFilterChanged) {
          onLoadData(false);
        }
      }, [
        pageNumber,
        getLanguageValue,
      ]);
    
      useEffect(() => {
        onLoadData(false);
        return () => {
         onResetPagination();
          onResetRepositoriesRecords();
        };
      }, []);
    return(
        <React.Fragment>
            <div className={styles.default.customersWrapper}>
            <TableTitle
              title="Trending repositories on GitHub"
              isLoading={!props.isDataLoaded}
            />
            <ConnectedDataTable
              columns={repositoriesTableColumns}
              data={props.data}
              isLoading={!props.isDataLoaded}
              isFilterActive={false}
              emptyFilterText="No Data"
              recordsIdPropName={"id"}
              refresh={() => props.onLoadData(true)}
              rowClick={(id: string)=> {
                const rec = props.data.filter(item =>item.id !== id)[0];
                <Link to={{ pathname: rec.url }} target="_blank" />
              }}
            />
            <ConnectedPagination
              isData={props.data.length > 0}
              isLoading={!props.isDataLoaded}
            />
    </div>
        </React.Fragment>

    )
}

export default Repositories;