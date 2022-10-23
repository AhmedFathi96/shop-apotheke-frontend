export interface ICheckboxStateProps {
  name: string;
  value: string;
  label: string;
  isChecked: boolean;
  outline?: boolean;
}
export interface ICheckboxDispatchProps {
  onChange: (isChecked: boolean, target?: HTMLInputElement) => void;
}
export interface ICheckboxProps
  extends ICheckboxStateProps,
    ICheckboxDispatchProps {}
