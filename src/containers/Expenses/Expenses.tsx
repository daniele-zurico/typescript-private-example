import { Button, Type } from 'components';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  createExpensesStart,
  loadCategoriesStart,
  loadExpensesStart,
} from 'store/actions';
import { getExpensesByCategory } from 'store/selectors';
import AddExpenses from './AddExpenses/AddExpenses';
import ShowExpenses from './ShowExpenses/ShowExpenses';

interface IState {
  isModalOpen: boolean;
}

interface IProps {
  categories: any[];
  expensesByCategory: any[];
  userId: string;
  loadCategories: (id: string) => void;
  loadExpenses: (id: string) => void;
  addExpenses: (
    userId: string,
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
    this.props.loadCategories(this.props.userId);
    this.props.loadExpenses(this.props.userId);
  }

  public addExpensesHandler = (
    name: string,
    amount: string,
    date: string,
    category: string
  ) => {
    this.props.addExpenses(this.props.userId, name, amount, date, category);
    this.setState({ isModalOpen: false });
  };

  public render() {
    return (
      <React.Fragment>
        <AddExpenses
          isModalOpen={this.state.isModalOpen}
          onDismissModal={() => this.setState({ isModalOpen: false })}
          categories={this.props.categories}
          onAddExpenses={this.addExpensesHandler}
        />
        <ShowExpenses expensesByCategory={this.props.expensesByCategory} />
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
  userId: state.auth.localId,
  expensesByCategory: getExpensesByCategory(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  loadCategories: (id: string) => dispatch(loadCategoriesStart(id)),
  loadExpenses: (id: string) => dispatch(loadExpensesStart(id)),
  addExpenses: (
    userId: string,
    name: string,
    amount: string,
    date: string,
    category: string
  ) => dispatch(createExpensesStart(userId, name, amount, date, category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses);
