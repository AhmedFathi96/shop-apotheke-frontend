import { RenderResult } from "@testing-library/react";
import { createCompoentTest } from "../../../../utils/testUtils";
import PaginationButton from "../paginationButton/paginationButton";
import { IPaginationButtonProps, paginationButtonTypes } from "../types";
jest.mock("../../../../api/api");
describe("pagination button component", () => {
  let componentTest: RenderResult;
  const defaultProps: IPaginationButtonProps = {
    pageNumber: 1,
    totalPages: 97,
    buttonNumber: 1,
    type: paginationButtonTypes.number,
  };

  beforeEach(() => {
    componentTest = createCompoentTest(<PaginationButton {...defaultProps} />);
  });

  it("should the right number", () => {
    const paginationBtn = componentTest.getByTestId("pagination-btn");

    expect(paginationBtn).toHaveTextContent(
      defaultProps.buttonNumber?.toString() as string
    );
  });
});
