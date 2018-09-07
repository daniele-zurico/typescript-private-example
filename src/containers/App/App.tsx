import Navigation from 'components/Navigation/Navigation';
import * as React from 'react';

class App extends React.Component<{}, {}> {

  public render() {
    const items = [{
      href: '#news',
      label: 'News'
    },{
      href: '#contact',
      label: 'Contact'
    },
    {
      href: '#about',
      label: 'About'
    }];

    return (
      <div>
        <Navigation items={items}/>
      </div>
    );
  }
}

export default App;
