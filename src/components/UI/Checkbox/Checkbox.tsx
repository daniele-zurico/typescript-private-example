import * as React from 'react';
import * as classes from './Checkbox.scss';

interface IProps {
  label: string;
  onChangeValue: (value: any) => void;
}

const checkbox = (props: IProps) => {
  return (
    <div className={classes.Container}>
      <label className={classes.Checkbox}>
        <input
          type="checkbox"
          onClick={props.onChangeValue}
          className={classes.Input}
        />
        <span className={classes.Span}>{props.label}</span>
      </label>
    </div>
  );
};

export default checkbox;
