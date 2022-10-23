import { ICheckboxProps } from "./types";
import classes from "./styles.module.scss";
import { FormEvent, useState } from "react";

const Checkbox:React.FC<ICheckboxProps> = (props: ICheckboxProps) =>{
  const [isChecked, setIsChecked] = useState(props.isChecked);

  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setIsChecked(event.currentTarget.checked);
    props.onChange(event.currentTarget.checked, event.currentTarget);
  };
  return (
    <div
      className={[
        isChecked ? classes["checkbox-active"] : classes.checkbox,
        props.outline ? classes.checkbox_outline : null,
        classes.checkbox,
        props.outline && isChecked ? classes.checkbox_outline_checked : null,
      ].join(" ")}
    >
      <input
        data-testid="checkbox-input"
        type="checkbox"
        id={props.name}
        name={props.name}
        value={props.value}
        checked={isChecked}
        onChange={handleOnChange}
      />
      <label data-testid="checkbox-label" htmlFor={props.name}>
        {props.label}
      </label>
    </div>
  );
}

export default Checkbox;
