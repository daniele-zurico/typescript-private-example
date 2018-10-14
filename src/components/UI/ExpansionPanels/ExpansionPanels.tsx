import * as React from 'react';
import { Component } from 'react';
import * as classes from './ExpansionPanels.scss';

interface IProps {
  titles: string[];
}

interface IState {
  panels: IPanel[];
}

interface IPanel {
  id: number;
  header: string;
  isOpen: boolean;
}

class ExpansionPanels extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const panelsState = props.titles.map((title: string, k: number) => ({
      id: k,
      header: title,
      isOpen: false,
    }));

    this.state = {
      panels: panelsState,
    };
  }

  // public state = {
  //   panels: [
  //     {
  //       id: 1,
  //       header: 'test',
  //       body: ['test'],
  //       isOpen: false,
  //     },
  //     {
  //       id: 2,
  //       header: 'test2',
  //       body: ['test'],
  //       isOpen: false,
  //     },
  //     {
  //       id: 3,
  //       header: 'test3',
  //       body: ['test'],
  //       isOpen: false,
  //     },
  //   ],
  // };

  public toggleBodyHandler = (id: number) => {
    const newState = this.state.panels.map((p: any) => {
      if (p.id === id) {
        return {
          ...p,
          isOpen: !p.isOpen,
        };
      } else {
        return p;
      }
    });

    this.setState({ panels: newState });
  };

  public render() {
    const panel = this.state.panels.map((p: IPanel) => {
      const containerClass = [
        classes.Container,
        p.isOpen ? classes.Open : null,
      ];
      const caretClass = [
        'fa',
        p.isOpen ? 'fa-angle-up' : 'fa-angle-down',
        classes.CaretDown,
      ];
      return (
        <div
          key={p.id}
          className={containerClass.join(' ')}
          onClick={() => this.toggleBodyHandler(p.id)}
        >
          <div className={classes.Header}>
            <div>{p.header}</div>
            <div>
              <i className={caretClass.join(' ')} />
            </div>
          </div>
          {p.isOpen && <div className={classes.Content}>Ciao</div>}
        </div>
      );
    });
    return <div className={classes.ExpansionPanel}>{panel}</div>;
  }
}

export default ExpansionPanels;
