import { BackDrop } from 'components/UI';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import * as classes from './Modal.scss';

interface IProps {
    isOpen: any;
    header?: string;
    onDismiss: () => void;
    children?: any;
}

const modal = (props: IProps) => {
    return (
        <React.Fragment>
            <BackDrop isOpen={props.isOpen} />
            <CSSTransition
                mountOnEnter={true}
                unmountOnExit={true}
                in={props.isOpen}
                timeout={{
                    enter: 1000,
                    exit: 1000
                }}
                classNames={{
                    enter: '',
                    enterActive: classes.ModalOpen,
                    exit: '',
                    exitActive: classes.ModalClose
                }}
            >
                <div className={classes.ModalContent}>
                    <div className={classes.Close} onClick={props.onDismiss}>X</div>
                    <div className={classes.Header}>{props.header}</div>
                    <div className={classes.Content}>{props.children}</div>
                </div>
            </CSSTransition>
        </React.Fragment>

    )

}

export default modal;
