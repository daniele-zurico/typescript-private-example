import { Card, FormElements } from 'components';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createIncomeStart, loadIncomeStart } from 'store/actions';
import * as classes from './Admin.scss';
import adminForm from './adminForm';


interface IProps {
    userId: string;
    income: string;
    addIncome: (id: string, amount: string, date: string) => void;
    loadIncome: (id: string) => void;
}
class Admin extends Component<IProps, any> {

    public componentDidMount() {
        this.props.loadIncome(this.props.userId);
    }

    public handleSubmit = (evt: React.FormEvent) => {
        this.props.addIncome(this.props.userId, evt[0].element.value, evt[1].element.value);
    };

    public render() {
        return <Card class={classes.FullCard} body={
            <FormElements key={this.props.income} data={adminForm(this.props.income)} onSubmit={this.handleSubmit} />
        } />
    }
}

const mapStateToProps = (state: any) => ({
    userId: state.auth.localId,
    income: state.admin.income
});

const mapDispatchToProps = (dispatch: any) => ({
    loadIncome: (id: string) => dispatch(loadIncomeStart(id)),
    addIncome: (id: string, amount: string, date: string) => dispatch(createIncomeStart(id, amount, date))
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
