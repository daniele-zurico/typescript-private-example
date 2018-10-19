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
declare var window: any;
interface IState {
  isModalOpen: boolean;
  overlayTopPos: number;
  overlayLeftPos: number;
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
    overlayTopPos: 0,
    overlayLeftPos: 0,
  };

  public overlay: any = React.createRef();

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

  public calculatePosition = (evt: any) => {
    const pos = evt.currentTarget.getBoundingClientRect();
    const left = (pos.x + (pos.width / 2));
    const top = pos.top + pos.height;
    let overlayLeftPos = left;
    if (left + this.overlay.current.clientWidth > window.innerWidth) {
      overlayLeftPos = left - this.overlay.current.clientWidth;
    }
    let overlayTopPos = top;
    if (top >= window.innerHeight) {
      overlayTopPos = top - this.overlay.current.clientHeight;
    }
    this.setState({ overlayTopPos, overlayLeftPos });
  }

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
          <Button
            outlined={true}
            label="27 Oct - 27 Nov"
            darkMode={true}
            type={Type.ACCENT}
            disabled={false}
            class={classes.CalendarBtn}
            clicked={this.calculatePosition} />
          <div
            style={{
              position: "fixed",
              top: this.state.overlayTopPos,
              left: this.state.overlayLeftPos,
              zIndex: 99999,
              border: '1px solid red',
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
            <div ref={this.overlay}
              style={{ width: '300px', height: '300px', backgroundColor: 'red' }}>ciao</div>
          </div>
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
            class={classes.CalendarBtn}
            clicked={this.calculatePosition} />

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
