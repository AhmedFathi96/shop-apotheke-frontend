import { IPaginationButtonProps, paginationButtonTypes } from "../types";
import classes from "./paginationButton.module.scss";

export function PaginationButton(props: IPaginationButtonProps) {
  return (
    <button
      onClick={props.click}
      data-testid="pagination-btn"
      disabled={
        (props.type === paginationButtonTypes.next &&
          props.pageNumber == props.totalPages) ||
        (props.type === paginationButtonTypes.prev && props.pageNumber === 1) ||
        props.buttonNumber === "..."
      }
      className={[
        classes.paginationButton,
        props.buttonNumber == props.pageNumber
          ? classes.paginationButton_active
          : null,
        props.type === paginationButtonTypes.prev && props.pageNumber === 1
          ? classes.paginationButton_disabled
          : null,
        props.type === paginationButtonTypes.next &&
        props.pageNumber == props.totalPages
          ? classes.paginationButton_disabled
          : null,
        props.type === paginationButtonTypes.prev
          ? classes.paginationButton_prev
          : null,
        props.type === paginationButtonTypes.next
          ? classes.paginationButton_next
          : null,
      ]
        .join(" ")
        .trim()}
    >
      {props.type === paginationButtonTypes.number ? props.buttonNumber : null}
      {props.type === paginationButtonTypes.prev ? (
        <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.01 12.7067H19"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.013 6.71468L4.002 12.7267L10.013 18.7387"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {props.type === paginationButtonTypes.next ? (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12.7267H5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 17.7267L19 12.7267"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 7.72668L19 12.7267"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </button>
  );
}

export default PaginationButton;
