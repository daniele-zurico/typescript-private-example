import { FormElements, Modal } from 'components';
import { ModalType } from 'components/UI/Modal/Modal';
import * as React from 'react';
import * as classes from './AddExpenses.scss';
import addExpensesForm from './addExpensesForm';

interface IProps {
  isModalOpen: boolean;
  onDismissModal: () => void;
  categories: any[];
  onAddExpenses: (
    name: string,
    amount: string,
    date: string,
    category: string
  ) => void;
}
const addExpenses = (props: IProps) => {
  const onCreateExpenses = (evt: any) => {
    const name = evt[0].element.value;
    const amount = evt[1].element.value;
    const date = evt[2].element.value;
    const category = evt[3].element.value;
    props.onAddExpenses(name, amount, date, category);
  };

  const selectCategories = props.categories.map(cat => ({
    ...cat,
    label: cat.category,
    value: cat.id,
  }));
  return (
    <Modal
      header="Add a new Expense"
      type={ModalType.SUCCESS}
      isOpen={props.isModalOpen}
      onDismiss={props.onDismissModal}
      class={classes.Modal}
    >
      <FormElements
        data={addExpensesForm(selectCategories)}
        onSubmit={onCreateExpenses}
      />
    </Modal>
  );
};

export default addExpenses;
