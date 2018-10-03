/**
 * It will display a modal dialog only when an error
 * will be passed in the props of the Wrapped component
 * The main component need to have in the props:
 * 1) error of type IError
 * 2) a method called dismissError
 */
import { IError } from 'common/interfaces';
import { Modal } from 'components/UI';
import { ModalType } from 'components/UI/Modal/Modal';
import * as React from 'react';
import { Component } from 'react';

interface IProps {
  error: IError;
  dismissError: () => void;
}

const errorHandler = (WrappedComponent: any) => {
  return class extends Component<IProps, {}> {
    public dismissHandler = () => {
      this.props.dismissError();
    };
    public render() {
      return (
        <React.Fragment>
          <Modal
            isOpen={this.props.error.code ? true : false}
            header="Error"
            type={ModalType.ERROR}
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
