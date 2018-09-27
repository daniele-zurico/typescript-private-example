import * as React from 'react';
import { Component } from 'react';
import * as classes from './Modal.scss';

interface IProps {
    isOpen: boolean;
}

interface IState {
    isOpen: boolean;
}

class Modal extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            isOpen: props.isOpen
        }
    }

    public closeHandler = () => {

        this.setState({ isOpen: false });
    }
    public render() {
        const ModalClasses = [classes.ModalContainer, !this.state.isOpen ? classes.Hide : null]
        return (
            <div className={ModalClasses.join(' ')} >
                <div className={classes.ModalContent}>
                    <div className={classes.Close} onClick={this.closeHandler}>X</div>
                    I'm a test
                </div>
            </div>
        )
    }

}

export default Modal;
