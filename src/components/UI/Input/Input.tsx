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
  darkMode?: boolean;
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
    darkMode,
  } = props;
  let hintOrError = (
    <div
      className={[classes.hint, darkMode ? classes.darkLabel : ''].join(' ')}
    >
      {hint}
    </div>
  );
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
    <div className={classes.formInput}>
      <label className={darkMode ? classes.darkLabel : ''}>
        <input
          required={true}
          type={type}
          value={value}
          className={darkMode ? classes.darkLabel : ''}
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
  );
};

export default input;
