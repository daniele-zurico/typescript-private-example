import {
  ExpansionPanel,
  ExpansionPanelBody,
  ExpansionPanelHeader,
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

  return (
    <React.Fragment>
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
                '#F44336',
                '#00bcd4',
                '#ff9800',
                '#009688',
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
              colors: ['#E91E63'],
            }}
          />
        </div>
      </div>
      <div className={classes.Details}>Details</div>
      <div className={classes.ExpansionPanel}>{expansionPanels}</div>
    </React.Fragment>
  );
};

export default showExpenses;
