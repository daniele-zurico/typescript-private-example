import { Navigation } from 'components';
import { INavigationItem } from 'components/Navigation';
import * as React from 'react';
import { Component } from "react";

class Dashboard extends Component {
    public items: INavigationItem[] = [
        {
            href: '#',
            label: 'Dashboard'
        }
    ]
    public render() {
        return <Navigation items={this.items} />;
    }
}

export default Dashboard;