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

const showExpenses = (props: IProps) => {
  const dataChart: any[] = [['Task', 'Hours per Day']];
  props.expensesByCategory.forEach((cat: any) => {
    dataChart.push([cat.category, cat.amount]);
  });

  const expansionPanels = props.expensesByCategory.map((cat, key) => (
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
      <Chart
        width={'100%'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={dataChart}
        options={{
          title: 'My Monthly expenses by category',
          // Just add this option
          pieHole: 0.4,
          legend: 'bottom',
        }}
        rootProps={{ 'data-testid': '3' }}
      />
      <div style={{ marginTop: '10px', width: '100%' }}>{expansionPanels}</div>
    </React.Fragment>
  );
};

export default showExpenses;
