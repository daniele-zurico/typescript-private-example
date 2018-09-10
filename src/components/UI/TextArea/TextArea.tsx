import * as React from 'react';
import * as classes from './TextArea.scss';

interface IProps {
    rows: number;
}

const textArea = (props: IProps) => {
    return (
        <React.Fragment>
            <div className={classes.formInput}>
                <label>
                    <textarea required={true} rows={props.rows} />
                    <span className={classes.placeholder}>Text Input</span>
                </label>
            </div>
        </React.Fragment>
    );
}

export default textArea;