import { isFormValid, validateElement } from 'common/util/util';
import { Button, Input } from 'components';
import * as React from 'react';
import * as classes from './Form.scss';

interface IProps {
  data: any;
  onSubmit: (evt: React.FormEvent) => void;
}

interface IState {
  formData: any;
  isValid: boolean;
}

class FormElements extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      formData: this.updateStateFromProps(),
      isValid: false,
    };
  }

  public inputHandler = (
    evt: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    // Update the value of the input
    const newForm = this.state.formData.map((el: any) => {
      if (el.id === id && el.element.component !== 'button') {
        el = {
          ...el,
          element: {
            ...el.element,
            value: evt.target.value,
            valid: validateElement(evt.target.value, el.element.validation),
            touched: true,
          },
        };
      }
      return el;
    });

    this.setState({
      formData: newForm,
      isValid: isFormValid(newForm),
    });
  };

  public submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.formData);
  };

  public showFieldHandler = (
    evt: React.MouseEvent<HTMLElement>,
    id: number
  ) => {
    const updatedValue = this.state.formData.map((el: any) => {
      if (el.id === id) {
        return {
          ...el,
          element: {
            ...el.element,
            showField: !el.element.showField,
            type: el.element.type === 'password' ? 'text' : 'password',
          },
        };
      } else {
        return el;
      }
    });
    this.setState({ formData: updatedValue });
  };

  public render() {
    const form: any[] = [];
    const formButtons: any[] = [];
    const { formData, isValid } = this.state;
    formData.map((el: any) => {
      const {
        component,
        id,
        placeholder,
        type,
        hint,
        value,
        errorMessage,
        label,
        showEye,
        showField,
        isSubmit,
        valid,
        touched,
      } = el.element;

      switch (component) {
        case 'input':
          form.push(
            <Input
              key={id}
              placeholder={placeholder ? placeholder : ''}
              type={type}
              hint={hint}
              value={value}
              valid={valid}
              touched={touched}
              showEye={showEye}
              errorMessage={errorMessage}
              onInputChange={evt => this.inputHandler(evt, el.id)}
              showField={showField}
              onShowField={evt => this.showFieldHandler(evt, el.id)}
            />
          );
          break;
        case 'button':
          formButtons.push(
            <Button
              key={id}
              label={label}
              disabled={!isValid}
              class={el.element.class}
              isSubmit={isSubmit}
            />
          );
          break;
      }
    });
    return (
      <form onSubmit={this.submitHandler}>
        {form}
        <div className={classes.ButtonContainer}>{formButtons}</div>
      </form>
    );
  }

  private updateStateFromProps() {
    const formData = [];
    for (const el in this.props.data) {
      formData.push({
        id: el,
        element: {
          ...this.props.data[el],
          valid: false,
          touched: false,
          showField: false,
        },
      });
    }
    return formData;
  }
}

export default FormElements;
