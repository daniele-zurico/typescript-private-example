import { Card, CardType } from 'components';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadExpensesStart, loadIncomeStart } from 'store/actions';
import { getTotalExpensesAmount } from 'store/selectors';
import * as classes from './Dashboard.scss';
/**
 * I just started to design it not valid code
 */
interface IProps {
  income: string;
  userId: string;
  loadIncome: (id: string) => any;
  loadExpenses: (id: string) => any;
  expensesTotAmount: number;
}

class Dashboard extends Component<IProps, {}> {
  public componentDidMount() {
    const { userId } = this.props;
    this.props.loadIncome(userId);
    this.props.loadExpenses(userId);
  }
  public render() {
    const { income, expensesTotAmount } = this.props;
    return (
      <React.Fragment>
        <div className={classes.Period}>
          Period:
          <span className={classes.Date}>27-09-2018</span>
          <span> to </span>
          <span className={classes.Date}>27-10-2018</span>
        </div>

        <Card
          title="Balance"
          body={
            <React.Fragment>
              <div className={classes.SpendingCircle}>
                <span className={classes.Balance}>
                  {parseFloat(income) - expensesTotAmount} £
                </span>
              </div>
              <div className={classes.Details}>
                <div>
                  <b>Income: </b>
                  {income} £
                </div>
                <div>
                  <b>Expenses:</b> {expensesTotAmount} £
                </div>
              </div>
            </React.Fragment>
          }
          footer={
            <div className={classes.FooterLabel}>
              <Link to="/statements">
                Details
                <i className={['fa', 'fa-angle-right'].join(' ')} />
              </Link>
            </div>
          }
        />

        <div className={classes.CardInfoContainer}>
          <Card
            mini={true}
            type={CardType.Primary}
            body={
              <Link to="/expenses">
                <i className={['fa', 'fa-plus-circle', classes.Fa].join(' ')} />
                <div>Add Expenses</div>
              </Link>
            }
          />

          <Card
            mini={true}
            type={CardType.Accent}
            body={
              <Link to="/categories">
                <i className={['fa', 'fa-plus-circle', classes.Fa].join(' ')} />
                <div>Add New Category</div>
              </Link>
            }
          />

          <Card
            mini={true}
            type={CardType.Info}
            body={
              <Link to="/statements">
                <i
                  className={['fa', 'fa-balance-scale', classes.Fa].join(' ')}
                />
                <div>Statements</div>
              </Link>
            }
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  userId: state.auth.localId,
  income: state.admin.income,
  expensesTotAmount: getTotalExpensesAmount(state.expenses),
});

const mapDispatchToProps = (dispatch: any) => ({
  loadIncome: (id: string) => dispatch(loadIncomeStart(id)),
  loadExpenses: (id: string) => dispatch(loadExpensesStart(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
