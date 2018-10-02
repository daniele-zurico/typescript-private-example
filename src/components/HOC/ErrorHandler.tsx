import { Modal } from 'components/UI';
import * as React from 'react';
import { Component } from 'react';

const errorHandler = (WrappedComponent: any) => {
  interface IProps {
    error: any;
    dismissError: () => void;
  }
  return class extends Component<IProps, {}> {
    public dismissHandler = () => {
      this.props.dismissError();
    };
    public render() {
      return (
        <React.Fragment>
          <Modal
            isOpen={this.props.error ? true : false}
            header="Error"
            onDismiss={this.dismissHandler}
          >
            {this.props.error ? this.props.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default errorHandler;
