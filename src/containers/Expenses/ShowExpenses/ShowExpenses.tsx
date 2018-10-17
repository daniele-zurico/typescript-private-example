import {
  ExpansionPanel,
  ExpansionPanelBody,
  ExpansionPanelHeader,
} from 'components';
import * as React from 'react';
import * as classes from './ShowExpenses.scss';

interface IProps {
  expenses: any[];
  categories: any[];
}

const showExpenses = (props: IProps) => {
  const mapCategoriesToExpenses: any[] = [];
  props.categories.map(cat => {
    const categories = {
      ...cat,
      expenses: [],
    };

    props.expenses.map(exp => {
      if (exp.category === cat.id) {
        categories.expenses.push({
          ...exp,
        });
      }
    });
    if (categories.expenses.length > 0) {
      mapCategoriesToExpenses.push(categories);
    }
  });
  const expansionPanels = mapCategoriesToExpenses.map((cat, key) => (
    <ExpansionPanel key={key}>
      <ExpansionPanelHeader>{cat.category}</ExpansionPanelHeader>
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

  return <React.Fragment>{expansionPanels}</React.Fragment>;
};

export default showExpenses;
