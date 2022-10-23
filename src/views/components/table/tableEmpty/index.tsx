import { useSearchParams } from "react-router-dom";
import { ITableEmptyProps } from "../types";
import * as styles from "./styles.module.scss";

export function TableEmpty(props: ITableEmptyProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const reset = () => {
    if (props.setPage && props.resetFilters) {
      props.setPage(1);
      setSearchParams({});
      props.resetFilters();
    }
  };
  return (
    <div className={styles.default.tableEmpty}>
      {props.icon ? <props.icon /> : null}
      <h1>
        {props.filter
          ? props.filterText
            ? props.filterText
            :"No results found. Try different dates or remove filters"
          : props.emptyText
          }
      </h1>
      <p>
        {
          props.filter
          ? "We couldn’t find what you are looking for"
          : props.emptySubText
        }
      </p>
      {props.filter ? (
        <button onClick={reset}>Reset Submit</button>
      ) : props.refresh ? (
        <button onClick={props.refresh}>Refresh</button>
      ) : null}
    </div>
  );
}
