import { INavigationItem } from 'components/Navigation/Navigation1/INavigation';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './NavigationItem.scss';

const navigationItem = (props: INavigationItem) => {
  return (
    <li className={classes.li}>
      <Link to={props.href}>{props.label}</Link>
    </li>
  );
};

export default navigationItem;
