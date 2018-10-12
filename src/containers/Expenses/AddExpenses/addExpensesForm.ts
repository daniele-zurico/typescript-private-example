import { IElement } from 'components';

const addExpensesForm: IElement = {
    totalIncome: {
        component: 'input',
        hint: 'add your expenses',
        id: 1,
        placeholder: 'Amount',
        type: 'text',
        validation: {
            required: true,
        },
        errorMessage: 'expenses is required',
        value: '',
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
    addExpensesBtn: {
        component: 'button',
        disabled: true,
        id: 3,
        label: 'Add',
        isSubmit: true,
        darkMode: true
    },
};

export default addExpensesForm;