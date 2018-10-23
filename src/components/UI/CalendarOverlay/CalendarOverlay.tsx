import * as React from 'react';
import { Component } from 'react';
import * as classes from './CalendarOverlay.scss';

interface IState {
  selectedDay: number;
}

class CalendarOverlay extends Component<{}, IState> {
  public state = {
    selectedDay: new Date().getDate(),
  };
  public render() {
    const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const weekDaysCell = weekDays.map((day: string, i: number) => (
      <div key={i} className={[classes.Day, classes.header].join(' ')}>
        <div className={[classes.cell, classes.header].join(' ')}>{day}</div>
      </div>
    ));

    const daysCell = [];
    const numberOfDays = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    ).getDate();
    for (let i = 1; i <= numberOfDays; i++) {
      daysCell.push(
        <div key={i} className={classes.Day}>
          <div
            className={[
              classes.cell,
              this.state.selectedDay === i ? classes.selected : null,
            ].join(' ')}
            onClick={() => this.setState({ selectedDay: i })}
          >
            {i}
          </div>
        </div>
      );
    }
    return (
      <div className={classes.Content}>
        <div className={classes.Header}>
          <div>
            <i className={['fa', 'fa-arrow-left'].join(' ')} />
          </div>
          <div>
            <b>October 2018</b>
          </div>
          <div>
            <i className={['fa', 'fa-arrow-right'].join(' ')} />
          </div>
        </div>
        <div className={classes.Body}>
          <div className={classes.WeekDaysContainer}>{weekDaysCell}</div>
          <div className={classes.WeekDaysContainer}>{daysCell}</div>
        </div>
      </div>
    );
  }
}

export default CalendarOverlay;
