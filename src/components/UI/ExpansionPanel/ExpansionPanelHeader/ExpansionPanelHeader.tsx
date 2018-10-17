import * as React from 'react';
import * as classes from './ExpansionPanelHeader.scss';

interface IProps {
  children: any;
  onClick?: () => any;
}

const expansionPanelHeader = (props: IProps) => {
  return (
    <div className={classes.Header} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default expansionPanelHeader;
