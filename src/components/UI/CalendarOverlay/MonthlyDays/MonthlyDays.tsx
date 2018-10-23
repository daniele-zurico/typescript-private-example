import * as React from 'react';
import Day from '../Day/Day';

interface IProps {
  year: number;
  month: number;
  onSelectedDay: (day: number) => void;
  selectedDay: number;
}

const monthlyDays = (props: IProps) => {
  // Element to display
  const days = [];

  // The week day number (0,6) of the first day of the current month
  const dayOfTheWeek = new Date(props.year, props.month, 1).getDay();
  // The number of days for the current month
  const numberOfDaysCurrMonth = new Date(
    props.year,
    props.month + 1,
    0
  ).getDate();
  // The number of days of the previous month
  const numberOfDaysPrevMonth = new Date(props.year, props.month, 0).getDate();

  for (let i = 1; i < dayOfTheWeek; i++) {
    const dayNumber = numberOfDaysPrevMonth - dayOfTheWeek + i + 1;
    days.push(<Day key={i} disable={true} day={dayNumber} />);
  }

  for (let i = 1; i <= numberOfDaysCurrMonth; i++) {
    days.push(
      <Day
        key={i}
        onSelectDay={() => props.onSelectedDay(i)}
        selected={props.selectedDay === i}
        day={i}
      />
    );
  }

  return <React.Fragment>{days}</React.Fragment>;
};

export default monthlyDays;
