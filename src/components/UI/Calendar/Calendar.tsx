import * as React from 'react';
import { Component } from 'react';
import * as classes from './Calendar.scss';

interface IState {
    selectedMonth: number;
}
interface IProps {
    onSelectDay: (timestamp: number) => any;
}

class Calendar extends Component<IProps, IState> {

    public state = {
        selectedMonth: -1
    }

    public months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    public handleMonthChange = (evt: React.FormEvent<HTMLSelectElement>) => {
        this.setState({ selectedMonth: this.months.indexOf(evt.currentTarget.value) });

    }

    public handleDayChange = (evt: React.FormEvent<HTMLSelectElement>) => {
        const timestamp: number = new Date(new Date().getFullYear(), this.state.selectedMonth, parseInt(evt.currentTarget.value, 10) + 1).getTime();
        this.props.onSelectDay(timestamp);
    }

    public render() {

        const months = this.months.map((day: any) =>
            <option key={day} value={day}>{day}</option>
        )
        const days = [];
        if (this.state.selectedMonth !== -1) {
            const numberOfDays = new Date(new Date().getFullYear(), this.state.selectedMonth + 1, 0).getDate();

            for (let i = 0; i < numberOfDays; i++) {
                days.push(<option key={i} value={i}>{i + 1}</option>);
            }

        }

        return (
            <div className={classes.CalendarContainer}>
                <div className={classes.MonthsContainer}>
                    <span>Month</span>
                    <select onChange={this.handleMonthChange}>
                        <option>Month</option>
                        {months}
                    </select>
                </div>

                <div className={classes.DaysContainer}>
                    <span>Day</span>
                    <select onChange={this.handleDayChange}>
                        <option>Day</option>
                        {days}
                    </select>
                </div>
            </div>
        )
    }

}

export default Calendar;
