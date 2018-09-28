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
        private resInterceptor: any;

        public componentWillMount() {
            this.resInterceptor = axios.interceptors.response.use((response) => {
                return response;
            }, (err) => {
                this.setState({ error: true, errorMessage: err.response.data.error.message });
            });
        }
        public componentWillUnmount() {
            axios.interceptors.response.eject(this.resInterceptor);
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