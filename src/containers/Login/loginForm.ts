import { IElement } from 'components';

export const loginForm = (isRegister: boolean): IElement => ({
  username: {
    component: 'input',
    hint: 'Your username is your email address',
    id: 1,
    placeholder: 'Username',
    type: 'text',
    validation: {
      required: true,
      email: true,
    },
    errorMessage: 'Your username is not a valid email address',
    value: '',
  },
  password: {
    component: 'input',
    hint: '',
    id: 2,
    placeholder: 'Password',
    type: 'password',
    validation: {
      max: 20,
      min: 2,
      required: true,
    },
    errorMessage: 'Your password is between 2 and 20 character',
    showEye: true,
    value: '',
  },
  loginBtn: {
    component: 'button',
    disabled: true,
    id: 3,
    label: `${isRegister ? 'register' : 'login'}`,
    isSubmit: true,
  },
});

export default loginForm;
