import * as React from 'react';
import * as classes from "./hamburger.scss";

interface IProps {
    class: string;
    toggleMenu: () => void;
}

interface IState {
    open: boolean;
}

class Hamburger extends React.Component<IProps, IState> {
    public state = {
        open: false
    }
    public render() {
        const hamburgerClass = [this.props.class, classes.hamburger, this.state.open ? classes.open : null];
        return(
            <div className={hamburgerClass.join(' ')} onClick={this.toggleMenu}>
                <span/>
                <span/>
            </div>
        );
    }
    
    private toggleMenu = () => {
        this.setState((prevState: IState) => {
            return {open: !prevState.open};
        });
        this.props.toggleMenu();  
    };
};

export default Hamburger;