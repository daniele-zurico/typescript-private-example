import { Button, IElement, Input } from 'components';
import * as React from 'react';
import { Component } from 'react';
import * as classes from './Form.scss';
import { IValidation } from './IForm';
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

  public onSubmit(evt: React.FormEvent) {
    this.props.onSubmit(evt);
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
			console.log(el.element);
      switch (component) {
        case 'input':
          form.push(
            <Input
              key={id}
              placeholder={placeholder ? placeholder : ''}
              type={type}
              hint={hint}
							value={value}
							valid = {valid}
							touched = {touched}
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
      <form onSubmit={this.onSubmit}>
        {form}
        <div className={classes.ButtonContainer}>{formButtons}</div>
      </form>
    );
  }
}

export default FormElements;

const validateElement = (
  value: string,
  validationRules: IValidation
): boolean => {
  let isValid = true;
  for (const validations in validationRules) {
    switch (validations) {
      case 'required':
        isValid = value.trim() !== '' && isValid;
        break;
      case 'email':
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
        break;
    }
  }
  return isValid;
};

const isFormValid = (elements: any): boolean => {
  let isValid = true;
  elements.map((e: any) => {
    if (e.element.component !== 'button') {
      isValid = e.element.valid && isValid;
    }
  });
  return isValid;
};
