import { RenderResult } from "@testing-library/react";
import { createCompoentTest } from "../../../../utils/testUtils";
import Pagination from "../pagination";
import { IPaginationProps } from "../types";
jest.mock("../paginationButton/paginationButton", () => "PaginationButton");
jest.mock("../../../../api/api");
describe("pagination component", () => {
  let componentTest: RenderResult;
  const defaultProps: IPaginationProps = {
    isData: true,
    isLoading: false,
    onSetNextPaginationPage: () => {},
    onSetPaginationPage: () => {},
    onSetPaginationResultsFromAndTo: () => {},
    onSetPaginationUIShownPages: () => {},
    onSetPrevPaginationPage: () => {},
    pageNumber: 1,
    resultsFrom: 1,
    resultsTo: 10,
    shownPages: [1, 2, 3, 4, 5, "...", 10],
    totalPages: 10,
    totalRecords: 97,
  };

  beforeEach(() => {
    componentTest = createCompoentTest(<Pagination {...defaultProps} />);
  });

  it("should the right number of buttons", () => {
    const paginationBtns = componentTest.getAllByTestId("pagination-page-btn");
    expect(paginationBtns.length).toEqual(7);
  });

  it("should show the right pagination information for current page", () => {
    expect(componentTest.getByTestId("pagination-page-data")).toHaveTextContent(
      "Showing 1 to 10 of 97 results"
    );
  });
});
