import * as React from 'react';
import * as classes from './ExpansionPanelBody.scss';
interface IProps {
  children: any;
}

const expansionPanelBody = (props: IProps) => {
  return <div className={classes.Content}>{props.children}</div>;
};

export default expansionPanelBody;
