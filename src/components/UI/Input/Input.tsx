import * as React from 'react';
import * as classes from './Input.scss';

interface IProps {
  placeholder: string;
  type?: string;
  hint?: string;
  value: string;
  valid?: boolean;
  errorMessage?: string;
  touched?: boolean;
  onInputChange?: (
    evt: React.ChangeEvent<HTMLInputElement>,
    id?: string
  ) => void;
}

const input = (props: IProps) => {
  const {
    type,
    value,
    placeholder,
    onInputChange,
    hint,
    valid,
    errorMessage,
    touched,
  } = props;
  let hintOrError = <div className={classes.hint}>{hint}</div>;
    if(!valid && touched ) {
        hintOrError =  <div className={classes.errorMessage}>{errorMessage}</div>;
    }
  return (
    <React.Fragment>
      <div className={classes.formInput}>
        <label>
          <input
            required={true}
            type={type}
            value={value}
            onChange={onInputChange}
          />
          <span className={classes.placeholder}>{placeholder}</span>
        </label>
        {hintOrError}
      </div>
    </React.Fragment>
  );
};

export default input;