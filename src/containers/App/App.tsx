import { Navigation } from 'components';
import * as React from 'react';
import { GoogleLogin } from 'react-google-login';

class App extends React.Component<{}, {}> {
  private items = [{
    href: '#categories',
    label: 'Categories'
  }, {
    href: '#Expenses',
    label: 'Expenses'
  }];

  public responseGoogle = (response: any) => {
  console.log(response);
  };

  public render() {
    return (
      <div>
        <Navigation items={this.items} />
        <GoogleLogin
          clientId="215288852601-llndpvt9mqa56h3nq8fss99urskrie4t.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}

export default App;
