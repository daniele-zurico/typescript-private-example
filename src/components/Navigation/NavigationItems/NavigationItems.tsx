import { INavigationItem, INavigationItems } from 'components/Navigation/INavigation';
import * as React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props: INavigationItems) => {
    return (
        <React.Fragment>
            {
                props.items.map((item: INavigationItem) => 
                (<NavigationItem key={item.href} href={item.href} label={item.label}/>))
            }
        </React.Fragment>
    );
}

export default navigationItems;