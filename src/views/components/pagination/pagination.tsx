import { useEffect } from "react";
import { paginationButtonTypes } from "./types";
import classes from "./pagination.module.scss";
import PaginationButton from "./paginationButton/paginationButton";
import { IPaginationProps } from "./types";
import { useSearchParams } from "react-router-dom";

export default function Pagination(props: IPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get("page")) {
      props.onSetPaginationPage(parseInt(searchParams.get("page") as string));
      searchParams.set("page", props.pageNumber.toString());
      setSearchParams(searchParams);
    }
  }, []);
  useEffect(() => {
    props.onSetPaginationUIShownPages();
    props.onSetPaginationResultsFromAndTo();
    searchParams.set("page", props.pageNumber.toString());
    setSearchParams(searchParams);
  }, [props.pageNumber, props.totalPages, props.totalRecords]);
  return props.isData && !props.isLoading ? (
    <div className={classes.pagination_container}>
      <div className={classes.status}>
        <span data-testid="pagination-page-data">
          {`Showing ${props.resultsFrom} to ${props.resultsTo} of ${props.totalRecords} results`}
          
        </span>
      </div>
      <div className={classes.pagination}>
        <PaginationButton
          pageNumber={props.pageNumber}
          totalPages={props.totalPages}
          type={paginationButtonTypes.prev}
          click={props.onSetPrevPaginationPage}
        />
        {props.shownPages.map((number, index) => {
          return (
            <PaginationButton
              key={index}
              data-testid="pagination-page-btn"
              pageNumber={props.pageNumber}
              buttonNumber={number}
              totalPages={props.totalPages}
              type={paginationButtonTypes.number}
              click={() => props.onSetPaginationPage(number as number)}
            />
          );
        })}
        <PaginationButton
          pageNumber={props.pageNumber}
          totalPages={props.totalPages}
          type={paginationButtonTypes.next}
          click={props.onSetNextPaginationPage}
        />
      </div>
    </div>
  ) : null;
}
