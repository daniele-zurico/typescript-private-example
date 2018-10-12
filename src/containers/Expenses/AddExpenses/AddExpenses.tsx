import { Calendar, Modal } from 'components';
import * as React from 'react';
interface IProps {
    isModalOpen: boolean;
    onDismissModal: () => void;
}
const addExpenses = (props: IProps) => {

    const selectDayHandler = (date: number) => {
        console.log(date);
    }

    return (
        <Modal
            header="Add a new Expense"
            isOpen={props.isModalOpen}
            onDismiss={props.onDismissModal}
        >
            <Calendar onSelectDay={selectDayHandler} />
        </Modal>
    )
}

export default addExpenses;
