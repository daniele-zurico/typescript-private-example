import * as React from 'react';
import * as classes from './ExpansionPanelHeader.scss';

interface IProps {
  children: any;
  onClick?: () => any;
  toggle?: boolean;
}

const expansionPanelHeader = (props: IProps) => {
  return (
    <div className={classes.Header} onClick={props.onClick}>
      {props.children}
      <i className={['fa', props.toggle ? 'fa-angle-right' : 'fa-angle-down', classes.Angle].join(' ')} />
    </div>
  );
};

export default expansionPanelHeader;
