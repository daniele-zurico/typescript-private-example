import * as React from 'react';
import { Component } from 'react';
import * as classes from './ExpansionPanel.scss';

interface IState {
  show: boolean;
}

class ExpansionPanel extends Component<{}, IState> {
  public state = {
    show: false,
  };

  public toggleContent = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  };

  public render() {
    const childrenWithNewProps = React.Children.map(
      this.props.children,
      (child: any, i) => {
        // doesn't display the content if `show` is false
        if (child.type.name === 'expansionPanelBody' && !this.state.show) {
          return null;
        }
        // map the toggle event on the title
        if (child.type.name === 'expansionPanelHeader') {
          return React.cloneElement(child, {
            onClick: this.toggleContent,
          });
        }
        return React.cloneElement(child);
      }
    );
    return (
      <div
        className={[
          classes.Container,
          this.state.show ? classes.Open : null,
        ].join(' ')}
      >
        {childrenWithNewProps}
      </div>
    );
  }
}
export default ExpansionPanel;
