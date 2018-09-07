import * as React from 'react';
import * as classes from "./hamburger.scss";

interface IProps {
    class: string;
}

interface IState {
    open: false;
}

class Hamburger extends React.Component<IProps, IState> {
    private hamburgerClass = [this.props.class, classes.hamburger, this.state.open ? classes.open : null];

    public render() {
        return(
            <div className={this.hamburgerClass.join(' ')} onClick={this.toggleMenu}>
                <span/>
                <span/>
            </div>
        );
    }
    
    private toggleMenu = () => {
        this.setState(prevState => {
            return {open: false};
        });
        
    };
};

export default Hamburger;