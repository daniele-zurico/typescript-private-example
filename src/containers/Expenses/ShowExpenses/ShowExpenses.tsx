import { addMonthsToCurrentDate } from 'common/util/util';
import {
  Button,
  Calendar,
  ClickableOverlay,
  ClickableOverlayContent,
  ClickableOverlayElement,
  ExpansionPanel,
  ExpansionPanelBody,
  ExpansionPanelHeader,
  Type,
} from 'components';
import * as React from 'react';
import { Chart } from 'react-google-charts';
import * as classes from './ShowExpenses.scss';

interface IProps {
  expensesByCategory: any[];
}

const showExpenses = ({ expensesByCategory }: IProps) => {
  const dataChart: any[] = [['Expenses', 'Amount per month']];
  expensesByCategory.forEach((cat: any) => {
    dataChart.push([cat.category, cat.amount]);
  });

  const expansionPanels = expensesByCategory.map((cat, key) => (
    <ExpansionPanel key={key}>
      <ExpansionPanelHeader>
        <div className={classes.Expense}>
          <div>{cat.category}</div>
          <div>£ {cat.amount}</div>
        </div>
      </ExpansionPanelHeader>
      {cat.expenses.map((expense: any, id: number) => (
        <ExpansionPanelBody key={id}>
          <div className={classes.Expense}>
            <div>{expense.name}</div>
            <div>£ {expense.amount}</div>
          </div>
        </ExpansionPanelBody>
      ))}
    </ExpansionPanel>
  ));

  const fromDateHandler = (date: number) => {
    console.log(new Date(date));
  };

  const toDateHandler = (date: number) => {
    console.log(new Date(date));
  };

  return (
    <React.Fragment>
      <ClickableOverlay>
        <ClickableOverlayElement>
          <Button
            outlined={true}
            label="27 Oct - 27 Nov"
            darkMode={true}
            type={Type.PRIMARY}
            disabled={false}
            class={classes.CalendarBtn}
          />
        </ClickableOverlayElement>
        <ClickableOverlayContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'white',
              boxShadow: '2px 2px 6px 0px rgba(0, 0, 0, 0.52)',
            }}
          >
            <div style={{ display: 'flex', marginTop: '15px' }}>
              <Calendar
                key={'calendar_from'}
                selectedDate={fromDateHandler}
                initialDate={addMonthsToCurrentDate(3).getTime()}
              />
              <Calendar
                key={'calendar_to'}
                selectedDate={toDateHandler}
                initialDate={addMonthsToCurrentDate(4).getTime()}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '15px',
              }}
            >
              <Button
                label="Confirm"
                darkMode={true}
                type={Type.PRIMARY}
                disabled={false}
                class={classes.CalendarBtn}
              />
            </div>
          </div>
        </ClickableOverlayContent>
      </ClickableOverlay>

      <div className={classes.ChartContainer}>
        <div className={classes.Chart}>
          <Chart
            width={'100%'}
            height={'100%'}
            chartType="PieChart"
            data={dataChart}
            options={{
              pieHole: 0.5,
              legend: 'top',
              colors: [
                '#ff6b6b',
                '#ffa200',
                '#45b6b0',
                '#65c3df',
                '#9c27b0',
                '#607d8b',
              ],
            }}
          />
        </div>
        <div className={classes.Chart}>
          <Chart
            width={'100%'}
            height={'100%'}
            chartType="BarChart"
            data={dataChart}
            options={{
              chartArea: { width: '100%' },
              legend: 'top',
              colors: ['#ff6b6b'],
            }}
          />
        </div>
      </div>
      <h3>Details</h3>
      <div className={classes.ExpansionPanel}>{expansionPanels}</div>
    </React.Fragment>
  );
};

export default showExpenses;
