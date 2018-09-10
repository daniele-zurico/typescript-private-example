import { Button, Navigation, Type } from 'components';
import * as React from 'react';

class App extends React.Component<{}, {}> {
  private items = [{
    href: '#categories',
    label: 'Categories'
  }, {
    href: '#contact',
    label: 'Contact'
  },
  {
    href: '#about',
    label: 'About'
  }];
  public clickHandler = () => {
    // tslint:disable-next-line:no-console
    console.log('test');
  }

  public render() {
    return (
      <div>
        <Navigation items={this.items} />
        <Button label='ciao' clicked={this.clickHandler} type={Type.ACCENT} />
      </div>
    );
  }
}

export default App;
