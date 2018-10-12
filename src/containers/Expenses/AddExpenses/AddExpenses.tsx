import { FormElements, Modal } from 'components';
import * as React from 'react';
import * as classes from './AddExpenses.scss';
import addExpensesForm from './addExpensesForm';

interface IProps {
    isModalOpen: boolean;
    onDismissModal: () => void;
}
const addExpenses = (props: IProps) => {

    const createExpensHandler = (evt: any) => {
        console.log(evt);
    }

    return (
        <Modal
            header="Add a new Expense"
            isOpen={props.isModalOpen}
            onDismiss={props.onDismissModal}
            class={classes.Modal}
        >
            <FormElements data={addExpensesForm} onSubmit={createExpensHandler} />
        </Modal>
    )
}

export default addExpenses;
