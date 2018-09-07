import { INavigationItem } from 'components/Navigation/INavigation';
import * as React from 'react';
import * as classes from './NavigationItem.scss';

const navigationItem = (props: INavigationItem) => {
    const link = [classes.a, classes.active].join(' ');
    return (
        <li className={classes.li}>
            <a className={link} href={props.href}>{props.label}</a>
        </li>
    );
}

export default navigationItem;