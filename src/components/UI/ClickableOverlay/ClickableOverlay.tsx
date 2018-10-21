import * as React from 'react';
import { Component } from 'react';
declare var window: any;

interface IState {
  overlayTopPos: number;
  overlayLeftPos: number;
  show: boolean;
}

class ClickableOverlay extends Component<{}, IState> {
  public state = {
    show: false,
    overlayTopPos: 0,
    overlayLeftPos: 0,
  };

  public overlayRef: any = React.createRef();

  public calculatePosition = (evt: any): any => {
    const { innerHeight, innerWidth } = window;
    const {
      x,
      y,
      width,
      height,
    } = evt.currentTarget.children[0].getBoundingClientRect();
    const { clientHeight, clientWidth } = this.overlayRef.current;
    let overlayLeftPos = x + width / 2;
    let overlayTopPos = y + height;
    if (overlayLeftPos + clientWidth > innerWidth) {
      overlayLeftPos -= clientWidth;
    }
    if (overlayTopPos + clientHeight > innerHeight) {
      overlayTopPos = y - clientHeight;
    }
    return { overlayLeftPos, overlayTopPos };
  };

  public toggleOverlayContentHandler = (evt: any) => {
    const { overlayLeftPos, overlayTopPos } = this.calculatePosition(evt);
    this.setState(prevState => {
      return {
        overlayLeftPos,
        overlayTopPos,
        show: !prevState.show,
      };
    });
  };

  public render() {
    const childrenWithNewProps = React.Children.map(
      this.props.children,
      (child: any, i) => {
        // if not visible hide the content otherwise clone the element and pass the state
        if (child.type.name === 'clickableOverlayContent') {
          // if (this.state.show) {
          return React.cloneElement(child, {
            overlayTopPos: this.state.overlayTopPos,
            overlayLeftPos: this.state.overlayLeftPos,
            reference: this.overlayRef,
            show: this.state.show,
          });
          // } else {
          //  return null;
          // }
        }
        // register the click to toggle the content
        if (child.type.name === 'clickableOverlayElement') {
          return React.cloneElement(child, {
            onClick: this.toggleOverlayContentHandler,
          });
        }
        return React.cloneElement(child);
      }
    );
    return <React.Fragment>{childrenWithNewProps}</React.Fragment>;
  }
}
export default ClickableOverlay;
