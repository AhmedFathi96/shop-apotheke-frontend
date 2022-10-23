import { useEffect, useRef, useState } from "react";
import classes from "./styles.module.scss";
import { IDropDownSelectFilterProps } from "./types";
import { useSearchParams } from "react-router-dom";
import xIcon from "../../../../images/icons/x-icon.svg";

const DropDownSelectFilter: React.FC<IDropDownSelectFilterProps> = (
  props: IDropDownSelectFilterProps
) => {
  const dropDownSelectButton = useRef(null);
  const dropDownSelectionArea = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    props.onComponentMount(props.filterName);

    return () => {
      props.onComponentUnmount(props.filterName);
    };
  }, []);

  useEffect(() => {
    const handleClickAway = (e: MouseEvent) => {
      if (
        dropDownSelectButton.current &&
        !(dropDownSelectButton.current as any).contains(e.target) &&
        dropDownSelectionArea.current &&
        !(dropDownSelectionArea.current as any).contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickAway);

    return () => {
      document.body.removeEventListener("click", handleClickAway);
    };
  }, []);

  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };


  useEffect(() => {
    const filterValueFromUrl = searchParams.get(props.filterName);
    if (filterValueFromUrl) {
      const filterValues = filterValueFromUrl.split(",");
      filterValues.forEach((value) => {
        const selectedOption = props.options.find(
          (option) => option.value === value
        );
        if (selectedOption) {
          props.onSelection(props.filterName, selectedOption.value, false);
        }
      });
    }
  }, []);

  const handleOnSelecion = (value: string) => {
    props.onSetPaginationPage(1);
    props.onSelection(props.filterName, value, true);
    searchParams.set(props.filterName, value);
    setSearchParams(searchParams);
    setIsOpen((prev) => !prev);
  };

  const handleClearFilter = (e: any) => {
    e.stopPropagation();
    searchParams.delete(props.filterName);
    setSearchParams(searchParams);
    props.onSetPaginationPage(1);
    props.onClearFilter(props.filterName);
    setIsOpen(false);
  };

  return (
    <>
      {(
        <div data-testid="multi-select" className={classes.dropDownSelect}>
          <button
            data-testid="multi-select-button"
            className={
              isOpen
                ? classes["dropDownSelect_button-open"]
                : classes.dropDownSelect_button
            }
            onClick={handleOnClick}
            ref={dropDownSelectButton}
          >
            <span className={classes.dropDownSelect_button_label}>
              <span
                data-testid="multi-select-name"
                className={classes.dropDownSelect_button_label_name}
              >
                {props.filterLabel} {props.firstSelected && <span>:</span>}
              </span>
              {props.firstSelected ? (
                <span
                  data-testid="multi-select-first-selected"
                  className={classes.dropDownSelect_button_label_firstSelected}
                >
                  {props.firstSelected?.label }
                </span>
              ) : null}
              {props.selectedValue  ? (
                <span
                  data-testid="multi-select-clear-filter"
                  onClick={(e) => {
                    handleClearFilter(e);
                  }}
                >
                  {" "}
                  <img
                    src={xIcon}
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                    data-testid="x_icon"
                  />
                </span>
              ) : null}
            </span>
          </button>
          {isOpen && (
            <div
              data-testid="multi-select-selection-list"
              className={classes.dropDownSelect_selectionList}
              ref={dropDownSelectionArea}
            >
              {props.options.map((option, index) => (
                <p
                  key={index}
                  onClick={() => {
                    handleOnSelecion(option.value);
                  }}
                >
                  {option.label}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DropDownSelectFilter;
