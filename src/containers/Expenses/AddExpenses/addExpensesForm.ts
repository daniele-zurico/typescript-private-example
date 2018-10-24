import { IElement } from 'components';

const addExpensesForm = (categories: any[]): IElement => ({
  expensesName: {
    component: 'input',
    hint: 'add your expenses name',
    id: 1,
    placeholder: 'Expenses Name',
    type: 'text',
    validation: {
      required: true,
    },
    errorMessage: 'expenses name is required',
    value: '',
    darkMode: true,
  },
  amount: {
    component: 'input',
    hint: 'add your expenses',
    id: 2,
    placeholder: 'Amount',
    type: 'text',
    validation: {
      required: true,
    },
    errorMessage: 'expenses amount is required',
    value: '',
    darkMode: true,
  },
  date: {
    component: 'date',
    value: '',
    id: 3,
    validation: {
      required: true,
    },
  },
  categories: {
    component: 'select',
    data: categories,
    label: 'Categories',
    id: 4,
  },
  recurrent: {
    component: 'checkbox',
    label: 'Recurrent',
    id: 505,
  },
  addExpensesBtn: {
    component: 'button',
    disabled: true,
    id: 6,
    label: 'Add',
    isSubmit: true,
    darkMode: true,
  },
});

export default addExpensesForm;
