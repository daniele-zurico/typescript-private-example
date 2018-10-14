import { ExpansionPanels } from 'components';
import * as React from 'react';

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
    mapCategoriesToExpenses.push(categories);
  });

  // const expByCat: any[] = [];
  // mapCategoriesToExpenses.map(cat => {
  //   if (cat.expenses.length !== 0) {
  //     const expenses = cat.expenses.map((e: any) => (
  //       <div key={e.id}>
  //         <span>{e.name}</span>
  //         <span>{e.amount}</span>
  //       </div>
  //     ));
  //     expByCat.push(
  //       <div>
  //         <div key={cat.id}>{cat.category}</div>
  //         <div>{expenses}</div>
  //       </div>
  //     );
  //   }
  // });

  return (
    <React.Fragment>
      {/* <div>{expByCat}</div> */}
      <ExpansionPanels titles={['test', 'test2', 'test3']} />
    </React.Fragment>
  );
};

export default showExpenses;
