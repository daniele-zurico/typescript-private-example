import { INavigationItem } from 'components/Navigation/INavigation';
import * as React from 'react';
import * as classes from './NavigationItem.scss';

const navigationItem = (props: INavigationItem) => {
    return (
        <li className={classes.li}>
            <a href={props.href}>{props.label}</a>
        </li>
    );
}

export default navigationItem;