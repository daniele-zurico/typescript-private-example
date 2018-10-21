import * as React from 'react';
import * as classes from './ClickableOverlayElement.scss';
interface IProps {
  onClick?: () => void;
  children: any;
}

const clickableOverlayElement = ({ onClick, children }: IProps) => {
  return (
    <div className={classes.Container}>
      <div onClick={onClick}>{children}</div>
    </div>
  );
};

export default clickableOverlayElement;
