import React from 'react';

import styles from './header.module.css';

import {Menu} from './menu/menu';
import {Logo} from './logo/logo';
import {User} from './user/user';

export function Header() {
    return (
        <header className={styles.header}>
            <Logo/>
            <Menu/>
            <User/>
        </header>
    )
}