import * as React from 'react';
import * as classes from './Day.scss';
interface IProps {
  onSelectDay?: () => void;
  selected?: boolean;
  day: number | string;
  disable?: boolean;
}

const day = (props: IProps) => {
  return (
    <div className={classes.Day}>
      <div
        className={[
          classes.cell,
          props.disable ? classes.disable : null,
          props.selected ? classes.selected : null,
        ].join(' ')}
        onClick={props.onSelectDay}
      >
        {props.day}
      </div>
    </div>
  );
};

export default day;
