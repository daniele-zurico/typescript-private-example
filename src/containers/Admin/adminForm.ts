import { IElement } from 'components';

export const adminForm = (income: string): IElement => ({
  totalIncome: {
    component: 'input',
    hint: 'Insert your total Income',
    id: 1,
    placeholder: 'Income',
    type: 'text',
    validation: {
      required: true,
    },
    errorMessage: 'Your income is required',
    value: income ? income : '',
    darkMode: true,
  },
  date: {
    component: 'date',
    value: '',
    id: 2,
    validation: {
      required: true,
    },
  },
  recurrent: {
    component: 'checkbox',
    id: 3,
    label: 'Recurrent',
  },
  confirmBtn: {
    component: 'button',
    disabled: true,
    id: 4,
    label: 'confirm',
    isSubmit: true,
    darkMode: true,
  },
});

export default adminForm;
