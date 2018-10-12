import { FormElements } from 'components';
import * as React from 'react';
import { Component } from 'react';
import adminForm from './adminForm';
class Admin extends Component {
  public handleSubmit = () => {
    console.log('handleSubmit');
  };

  public render() {
    return <FormElements data={adminForm} onSubmit={this.handleSubmit} />;
  }
}

export default Admin;
