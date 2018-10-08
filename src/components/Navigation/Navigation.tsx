import * as React from 'react';
import { INavigationItems } from './INavigation';
import * as classes from './Navigation.scss';
import Hamburger from './NavigationItems/NavigationItem/hamburger/hamburger';
import Logo from './NavigationItems/NavigationItem/Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

interface IState {
    isOpen: boolean;
}

class Navigation extends React.Component<INavigationItems, IState> {
    public state = {
        isOpen: false
    }

    public toggleMenuHandler = () => {
        this.setState((prevState: IState) => {
            return {
                isOpen: !prevState.isOpen
            }
        })
    };

    public render() {
        const navigationClasses = [classes.navigation, this.state.isOpen ? classes.open : classes.close];
        const navigationItems = [classes.navigationItems];
        return (
            <nav className={navigationClasses.join(' ')}>
                <Hamburger class={classes.navigationMenu} toggleMenu={this.toggleMenuHandler} />
                <Logo class={classes.navigationLogo} default={this.props.default} />
                <div className={navigationItems.join(' ')}>
                    <ul>
                        <NavigationItems items={this.props.items} />
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;