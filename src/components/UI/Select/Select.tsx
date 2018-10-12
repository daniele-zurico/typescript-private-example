import * as React from 'react';
import * as classes from './Select.scss';
interface IProps {
    data: IData[];
    label: string;
    onChangeValue: (value: any) => void
}

interface IData {
    value: string;
    label: string;
}

const select = (props: IProps) => {
    const values = props.data.map((v: IData, i: number) => (
        <option key={i} value={v.value}>{v.label}</option>
    ));

    return (
        <div className={classes.Container}>
            <span>{props.label}</span>
            <select onChange={props.onChangeValue}>
                <option>Select</option>
                {values}
            </select>
        </div>
    )
}

export default select;
