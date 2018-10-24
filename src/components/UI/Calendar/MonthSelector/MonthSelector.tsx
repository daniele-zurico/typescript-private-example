import * as React from 'react';
import * as classes from './MonthSelector.scss';

interface IProps {
  handleDecrementMonth: () => void;
  handleIncrementMonth: () => void;
  selectedMonth: number;
  selectedYear: number;
}

const monthSelector = (props: IProps) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <div className={classes.Header}>
      <div onClick={props.handleDecrementMonth}>
        <i className={['fa', 'fa-arrow-left'].join(' ')} />
      </div>
      <div>
        <b>
          {months[props.selectedMonth]} {props.selectedYear}
        </b>
      </div>
      <div onClick={props.handleIncrementMonth}>
        <i className={['fa', 'fa-arrow-right'].join(' ')} />
      </div>
    </div>
  );
};

export default monthSelector;
