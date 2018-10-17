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
        <Chart
          width={'100%'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={dataChart}
          options={{
            title: 'My Monthly expenses by category',
            // Just add this option
            pieHole: 0.5,
            legend: 'bottom',
            colors: [
              '#F44336',
              '#00bcd4',
              '#ff9800',
              '#009688',
              '#9c27b0',
              '#607d8b',
            ],
          }}
          rootProps={{ 'data-testid': '3' }}
        />
      </div>
      <div className={classes.Details}>Details</div>
      <div style={{ marginTop: '10px', width: '100%' }}>{expansionPanels}</div>
    </React.Fragment>
  );
};

export default showExpenses;
