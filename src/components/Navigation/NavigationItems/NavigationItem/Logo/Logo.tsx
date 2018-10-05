import * as React from 'react';
import * as classes from './Logo.scss';

interface IProps {
    class?: string;
}

const logo = (props: IProps) => {
    const containerClass = [props.class, classes.logoContainer].join(' ');
    return (
        <div className={containerClass}>
            <a href="/">
                <img className={classes.logo} src={require('styles/assets/logo_initials.png')} />
            </a>
        </div>
    )

}

export default logo;