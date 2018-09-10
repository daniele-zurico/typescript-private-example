import * as React from 'react';
import * as classes from './Input.scss';
const input = () => {
    return (
        <React.Fragment>
            <div className={classes.formInput}>
                <label>
                    <input required={true} />
                    <span className={classes.placeholder}>Text Input</span>
                </label>
            </div>
        </React.Fragment>
    );
}

export default input;