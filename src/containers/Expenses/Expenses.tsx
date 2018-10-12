import { Button, Type } from 'components';
import * as React from 'react';
import { Component } from 'react';
import AddExpenses from './AddExpenses/AddExpenses';

interface IState {
    isModalOpen: boolean;
}
class Expenses extends Component<any, IState> {
    public state = {
        isModalOpen: false,
    }
    public openModalHandler = () => {
        this.setState({ isModalOpen: true });
    };
    public dismissModalHandler = () => {
        this.setState({ isModalOpen: false });
    }
    public render() {
        return (
            <React.Fragment>
                <AddExpenses
                    isModalOpen={this.state.isModalOpen}
                    onDismissModal={this.dismissModalHandler} />
                <Button
                    label="+"
                    type={Type.PRIMARY}
                    floating={true}
                    clicked={this.openModalHandler}
                />
            </React.Fragment>

        )
    }
}

export default Expenses;
