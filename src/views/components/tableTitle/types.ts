import { ReactChild } from "react";

export interface ITableTitleProps {
  title: string;
  isLoading: boolean;
  children?: ReactChild[] | ReactChild;
}
