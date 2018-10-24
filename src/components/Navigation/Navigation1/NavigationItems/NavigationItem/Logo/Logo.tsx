import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './Logo.scss';

interface IProps {
    class?: string;
    default?: string;
}

const logo = (props: IProps) => {
    const containerClass = [props.class, classes.logoContainer].join(' ');
    return (
        <div className={containerClass}>
            <Link to={props.default ? props.default : '/'}>
                <img className={classes.logo} src={require('styles/assets/logo_initials.png')} />
            </Link>
        </div>
    )

}

export default logo;