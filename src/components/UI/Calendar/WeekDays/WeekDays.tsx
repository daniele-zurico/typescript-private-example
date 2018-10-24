import * as React from 'react';
import Day from '../Day/Day';

const weekDays = () => {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  return (
    <React.Fragment>
      {days.map((day: string) => (
        <Day key={day} day={day} />
      ))}
    </React.Fragment>
  );
};

export default weekDays;
