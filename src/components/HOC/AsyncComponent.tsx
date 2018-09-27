import * as React from 'react';
import { Component } from 'react';

interface IState {
    component: any;
}

const asyncComponent = (importComponent: any) => {
    return class extends Component<IState, {}> {
        public state = {
            component: null
        }

        public componentDidMount() {
            importComponent()
                .then((cmp: any) => this.setState({ component: cmp.default }));
        }

        public render() {
            const C: any = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;