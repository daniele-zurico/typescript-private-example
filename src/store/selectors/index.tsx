import { createSelector } from 'reselect';
const getExpenses = (state: any) => state.expenses;
const getCategories = (state: any) => state.categories;

export const getTotalExpensesAmount = createSelector([getExpenses], expenses =>
  expenses.reduce((sum: number, expense: any) => {
    return sum + parseFloat(expense.amount);
  }, 0)
);

export const getExpensesByCategory = createSelector(
  [getExpenses, getCategories],
  (exp, cat) => {
    const value: any = [];
    cat.categories.forEach((category: any) => {
      let amount = 0;
      const expenses: any[] = [];
      exp.expenses.forEach((expense: any) => {
        if (expense.category === category.id) {
          expenses.push({ ...expense });
          amount += parseFloat(expense.amount);
        }
      });

      if (expenses.length > 0) {
        const categoryTmp = {
          ...category,
          expenses,
          amount,
        };
        value.push(categoryTmp);
      }
    });
    return value;
  }
);

export const getLoadingCategoriesAndExpenses = createSelector(
  [getExpenses, getCategories],
  (exp, cat) => {
    const x = exp.loading && cat.loading;
    return x;
  }
);
