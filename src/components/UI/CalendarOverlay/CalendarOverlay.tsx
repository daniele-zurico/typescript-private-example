import * as React from 'react';
import { Component } from 'react';
import * as classes from './CalendarOverlay.scss';
import MonthlyDays from './MonthlyDays/MonthlyDays';
import MonthSelector from './MonthSelector/MonthSelector';
import WeekDays from './WeekDays/WeekDays';

interface IState {
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
}

interface IProps {
  initialDate?: number;
  selectedDate: (date: number) => void;
}

class CalendarOverlay extends Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    initialDate: new Date().getTime(),
  };
  public state = {
    selectedDay: new Date(this.props.initialDate as number).getDate(),
    selectedMonth: new Date(this.props.initialDate as number).getMonth(),
    selectedYear: new Date(this.props.initialDate as number).getFullYear(),
  };
  public handleIncrementMonth = () => {
    this.setState((prevState: any) => ({
      selectedMonth:
        prevState.selectedMonth === 11 ? 0 : prevState.selectedMonth + 1,
      selectedYear:
        prevState.selectedMonth === 11
          ? prevState.selectedYear + 1
          : prevState.selectedYear,
    }));
  };

  public handleDecrementMonth = () => {
    this.setState((prevState: any) => ({
      selectedMonth:
        prevState.selectedMonth === 0 ? 11 : prevState.selectedMonth - 1,
      selectedYear:
        prevState.selectedMonth === 0
          ? prevState.selectedYear - 1
          : prevState.selectedYear,
    }));
  };

  public selectedDayHandler = (day: number) => {
    const selectedDate = new Date(
      this.state.selectedYear,
      this.state.selectedMonth,
      day
    );
    this.setState({ selectedDay: day });
    this.props.selectedDate(selectedDate.getTime());
  };

  public render() {
    return (
      <div className={classes.Content}>
        <MonthSelector
          handleDecrementMonth={this.handleDecrementMonth}
          handleIncrementMonth={this.handleIncrementMonth}
          selectedMonth={this.state.selectedMonth}
          selectedYear={this.state.selectedYear}
        />
        <div className={classes.Body}>
          <div className={classes.WeekDaysContainer}>
            <WeekDays />
          </div>
          <div className={classes.WeekDaysContainer}>
            <MonthlyDays
              month={this.state.selectedMonth}
              year={this.state.selectedYear}
              onSelectedDay={this.selectedDayHandler}
              selectedDay={this.state.selectedDay}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarOverlay;
