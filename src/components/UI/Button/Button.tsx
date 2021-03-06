import * as React from 'react';
import * as classes from './Button.scss';

interface IProp {
  type?: Type;
  label: string;
  class?: string;
  disabled?: boolean;
  isSubmit?: boolean;
  floating?: boolean;
  darkMode?: boolean;
  outlined?: boolean;
  clicked?: (evt: any) => void;
}

export enum Type {
  PRIMARY = 'primary',
  ACCENT = 'accent',
  WARN = 'warn',
}

const button = (props: IProp) => {
  const buttonClass = [
    classes.Button,
    props.class,
    props.disabled && props.darkMode ? classes.Dark : null,
  ];
  if (props.floating) {
    buttonClass.push(classes.Floating);
  }
  if (props.outlined) {
    buttonClass.push(classes.outlines);
  }
  switch (props.type) {
    case Type.PRIMARY:
      buttonClass.push(classes.primary);
      break;
    case Type.ACCENT:
      buttonClass.push(classes.accent);
      break;
    case Type.WARN:
      buttonClass.push(classes.warn);
      break;
    default:
      buttonClass.push(classes.primary);
      break;
  }
  return (
    <button
      className={buttonClass.join(' ')}
      type={props.isSubmit ? 'submit' : undefined}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default button;
