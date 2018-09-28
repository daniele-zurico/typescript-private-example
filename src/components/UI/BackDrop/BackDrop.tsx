import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import * as classes from './BackDrop.scss';

interface IProps {
    isOpen: any;
}

const backDrop = (props: IProps) => {
    return (
        <CSSTransition
            mountOnEnter={true}
            unmountOnExit={true}
            in={props.isOpen}
            timeout={{
                enter: 800,
                exit: 2000
            }}
            classNames={{
                enter: '',
                enterActive: classes.BackDropShow,
                exit: '',
                exitActive: classes.BackDropHide
            }}
        >
            <div className={classes.BackDrop} />
        </CSSTransition>
    )
}

export default backDrop;