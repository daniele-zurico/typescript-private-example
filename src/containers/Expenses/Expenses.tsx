import { Button, Spinner, Type } from 'components';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  createExpensesStart,
  loadCategoriesStart,
  loadExpensesStart,
} from 'store/actions';
import {
  getExpensesByCategory,
  getLoadingCategoriesAndExpenses,
} from 'store/selectors';
import AddExpenses from './AddExpenses/AddExpenses';
import * as classes from './Expenses.scss';
import ShowExpenses from './ShowExpenses/ShowExpenses';

interface IState {
  isModalOpen: boolean;
}

interface IProps {
  categories: any[];
  expensesByCategory: any[];
  isLoading: boolean;
  loadCategories: () => void;
  loadExpenses: () => void;
  addExpenses: (
    name: string,
    amount: string,
    date: string,
    category: string
  ) => void;
}
class Expenses extends Component<IProps, IState> {
  public state = {
    isModalOpen: false,
  };

  public componentDidMount() {
    this.props.loadCategories();
    this.props.loadExpenses();
  }

  public addExpensesHandler = (
    name: string,
    amount: string,
    date: string,
    category: string
  ) => {
    this.props.addExpenses(name, amount, date, category);
    this.setState({ isModalOpen: false });
  };

  public render() {
    let displayContent = <Spinner />;
    if (!this.props.isLoading) {
      displayContent = (
        <React.Fragment>
          <AddExpenses
            isModalOpen={this.state.isModalOpen}
            onDismissModal={() => this.setState({ isModalOpen: false })}
            categories={this.props.categories}
            onAddExpenses={this.addExpensesHandler}
          />
          <ShowExpenses expensesByCategory={this.props.expensesByCategory} />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className={classes.CalendarContainer}>
          <Button
            outlined={true}
            label="27 Oct - 27 Nov"
            darkMode={true}
            type={Type.ACCENT}
            disabled={false}
            class={classes.CalendarBtn} />
        </div>
        {displayContent}

        <Button
          label="+"
          type={Type.PRIMARY}
          floating={true}
          clicked={() => this.setState({ isModalOpen: true })}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  categories: state.categories.categories,
  expensesByCategory: getExpensesByCategory(state),
  isLoading: getLoadingCategoriesAndExpenses(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  loadCategories: () => dispatch(loadCategoriesStart()),
  loadExpenses: () => dispatch(loadExpensesStart()),
  addExpenses: (
    name: string,
    amount: string,
    date: string,
    category: string
  ) => dispatch(createExpensesStart(name, amount, date, category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses);
