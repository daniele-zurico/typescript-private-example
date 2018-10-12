import * as React from 'react';
import * as classes from './Card.scss';

export enum CardType {
  Primary = 'Primary',
  Accent = 'Accent',
  Info = 'Info',
}

interface IProps {
  title?: string;
  body?: any;
  footer?: any;
  mini?: boolean;
  type?: CardType;
  customColor?: string;
  class?: string;
}

const card = (props: IProps) => {
  const cardTypeClass = [classes.Card, props.class];
  if (props.type) {
    switch (props.type) {
      case CardType.Primary:
        cardTypeClass.push(classes.Primary);
        break;
      case CardType.Accent:
        cardTypeClass.push(classes.Accent);
        break;
      case CardType.Info:
        cardTypeClass.push(classes.Info);
        break;
    }
  }
  if (props.mini) {
    cardTypeClass.push(classes.Mini);
  }
  return (
    <div
      className={cardTypeClass.join(' ')}
      style={{ backgroundColor: props.customColor }}
    >
      {props.title && <div className={classes.Title}>{props.title}</div>}
      <div className={classes.Body}>{props.body}</div>
      {props.footer && <div className={classes.Footer}>{props.footer}</div>}
    </div>
  );
};

export default card;
