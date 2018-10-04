/**
 * Async component is useful to load whatever component asynchronous
 * In this way we can do a lazy loading of the component loading the chunk only when required
 * @example
 * const asyncLogin = asyncComponent(() => import('./containers/Login/Login'));
 * The login component will be loaded only when requested and will not be included in the main chunk
 */
import * as React from 'react';
import { Component } from 'react';

interface IState {
  component: any;
}

const asyncComponent = (importComponent: any) => {
  return class extends Component<IState, {}> {
    public state = {
      component: null,
    };

    public componentDidMount() {
      importComponent().then((cmp: any) =>
        this.setState({ component: cmp.default })
      );
    }

    public render() {
      const C: any = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
