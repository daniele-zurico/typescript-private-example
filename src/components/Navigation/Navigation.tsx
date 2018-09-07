import * as React from 'react';
import { INavigationItems } from './INavigation';
import * as classes from './Navigation.scss';
import Hamburger from './NavigationItems/NavigationItem/hamburger/hamburger';
import Logo from './NavigationItems/NavigationItem/Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

const navigation = (props: INavigationItems) => {
    return (
        <nav className={classes.navigation}>
            <Hamburger class={classes.navigationMenu}/> 
            <Logo class={classes.navigationLogo}/>
            <div className={classes.navigationItem}>
                <ul>
                    <NavigationItems items={props.items}/>
                </ul> 
            </div>
        </nav>
    )
}

export default navigation;