import { isFormValid, validateElement } from 'common/util/util';
import { Button, IElement, Input } from 'components';
import * as React from 'react';
import { Component } from 'react';
import * as classes from './Form.scss';
interface IProps {
  data: IElement;
  onSubmit: (evt: React.FormEvent) => void;
}

interface IState {
  formData: any;
  isValid: boolean;
}

class FormElements extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const formData = [];
    for (const el in this.props.data) {
      formData.push({
        id: el,
        element: {
          ...this.props.data[el],
          valid: false,
          touched: false
        },
      });
    }

    this.state = {
      formData,
      isValid: false,
    };
  }

  public inputHandler = (evt: React.ChangeEvent<HTMLInputElement>, id: number) => {
    // Update the value of the input
    const newForm = this.state.formData.map((el: any) => {
      if (el.id === id && el.element.component !== 'button') {
        el = {
          ...el,
          element: {
            ...el.element,
            value: evt.target.value,
            valid: validateElement(evt.target.value, el.element.validation),
            touched: true
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
  }

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
        isSubmit,
        valid,
        touched
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
              errorMessage={errorMessage}
              onInputChange={evt => this.inputHandler(evt, el.id)}
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
        <div className={classes.ButtonContainer}>
          {formButtons}
        </div>
      </form>
    );
  }
}

export default FormElements;
