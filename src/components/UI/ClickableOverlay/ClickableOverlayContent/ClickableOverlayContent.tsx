import * as React from 'react';

interface IProps {
  overlayTopPos?: number;
  overlayLeftPos?: number;
  children?: any;
  reference?: any;
  show?: boolean;
}

const clickableOverlayContent = (props: IProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: props.overlayTopPos,
        left: props.overlayLeftPos,
        zIndex: 99999,
        border: '1px solid red',
        display: 'flex',
        visibility: !props.show ? 'hidden' : 'visible',
        justifyContent: 'flex-end',
      }}
      ref={props.reference}
    >
      {props.children}
    </div>
  );
};

export default clickableOverlayContent;
