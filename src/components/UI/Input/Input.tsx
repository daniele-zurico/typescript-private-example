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
  showEye?: boolean;
  showField?: boolean;
  onInputChange?: (
    evt: React.ChangeEvent<HTMLInputElement>,
    id?: string
  ) => void;
  onShowField?: (evt: React.MouseEvent<HTMLElement>, id?: string) => void;
}

const input = (props: IProps) => {
  const {
    type,
    value,
    placeholder,
    hint,
    valid,
    errorMessage,
    touched,
    showEye,
    showField,
    onInputChange,
    onShowField,
  } = props;
  let hintOrError = <div className={classes.hint}>{hint}</div>;
  if (!valid && touched) {
    hintOrError = <div className={classes.errorMessage}>{errorMessage}</div>;
  }
  let showFieldClass = [];
  if (showField) {
    showFieldClass = ['fa', 'fa-eye', 'fa-eye-slash'];
  } else {
    showFieldClass = ['fa', 'fa-eye'];
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
        {showEye && (
          <span className={classes.iconInput}>
            <i className={showFieldClass.join(' ')} onClick={onShowField} />
          </span>
        )}
        {hintOrError}
      </div>
    </React.Fragment>
  );
};

export default input;
