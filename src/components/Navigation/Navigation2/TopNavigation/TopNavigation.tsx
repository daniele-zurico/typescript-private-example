import {
  Button,
  ClickableOverlay,
  ClickableOverlayContent,
  ClickableOverlayElement,
  Type,
} from 'components/UI';
import * as React from 'react';
import * as classes from './TopNavigation.scss';

interface IProps {
  displayUser: string;
  logoutHandler: () => void;
}

const topNavigation = (props: IProps) => {
  return (
    <nav role="navigation" className={classes.Navbar}>
      <ClickableOverlay>
        <ClickableOverlayElement>
          <div className={classes.MenuContent}>
            <div className={classes.PersonContent}>
              <i className={['material-icons', classes.Icon].join(' ')}>
                person
              </i>
            </div>
            <span className={classes.PersonName}>Hi, {props.displayUser}</span>
            <span>
              <i className={['material-icons', classes.Caret].join(' ')}>
                arrow_drop_down
              </i>
            </span>
          </div>
        </ClickableOverlayElement>
        <ClickableOverlayContent>
          <div className={classes.OverlayContent}>
            <ul>
              <li>
                <i className={'material-icons'}>person</i>
                <span>My Profile</span>
              </li>
            </ul>
            <div style={{ width: '100%', display: 'flex' }}>
              <Button
                type={Type.WARN}
                label="logout"
                clicked={props.logoutHandler}
              />
            </div>
          </div>
        </ClickableOverlayContent>
      </ClickableOverlay>
    </nav>
  );
};

export default topNavigation;
