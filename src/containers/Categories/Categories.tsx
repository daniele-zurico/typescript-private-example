import { Button, Modal, Type } from 'components';
import * as React from 'react';
import { Component } from 'react';
interface IState {
    isModalOpen: boolean;
}

class Categories extends Component<{}, IState> {

    public state = {
        isModalOpen: false,
    }

    public dismissModalHandler = () => {
        this.setState({ isModalOpen: false });
    }

    public openModalHandler = () => {
        this.setState({ isModalOpen: true });
    }

    public render() {
        return (
            <React.Fragment>
                <Modal
                    header="Add a new Category"
                    isOpen={this.state.isModalOpen}
                    onDismiss={this.dismissModalHandler}>

                    <select>
                        <option value='orange'>Orange</option>
                        <option value='blue' >Blue</option>
                    </select>


                </Modal>
                <Button
                    label='+'
                    type={Type.PRIMARY}
                    floating={true}
                    clicked={this.openModalHandler} />
            </React.Fragment>
        )
    }
}

export default Categories;
