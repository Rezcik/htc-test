import styles from './logo.module.css';
import {ReactComponent as LogoSvg} from '../../../assets/img/logo.svg';
import React from 'react';
import {Link} from 'react-router-dom';

export function Logo(){
    return (
        <Link className={styles.logo} to='home'>
            <LogoSvg/>
        </Link>
    )
}
