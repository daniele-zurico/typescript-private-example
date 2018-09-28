import axios from 'common/util/axios-http-auth';
import { Modal } from 'components/UI';
import * as React from 'react';
import { Component } from 'react';

const errorHandler = (WrappedComponent: any) => {
    interface IState {
        errorMessage: string;
        error: boolean;
    }
    return class extends Component<{}, IState> {
        public state = {
            error: false,
            errorMessage: ''
        }

        public componentDidMount() {
            debugger
            axios.interceptors.response.use((response) => {
                return response;
            }, (err) => {
                debugger
                console.log(err.response.data.error.message);
                this.setState({ error: true, errorMessage: err.response.data.error.message });
            });
        }

        public dismissHandler = () => {
            this.setState({ error: false });
        }
        public render() {
            return (
                <React.Fragment>
                    <Modal isOpen={this.state.error} header='Error' onDismiss={this.dismissHandler}>
                        {this.state.errorMessage}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>

            )

        }
    };
}

export default errorHandler;