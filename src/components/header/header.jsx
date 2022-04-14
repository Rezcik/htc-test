import React, {useState} from 'react';

import styles from './header.module.css';

import {Menu} from "./menu/menu";
import {Logo} from "./logo/logo";
import {User} from "./user/user";
import {Content} from "../Routes";
import {Modal} from "../modal/modal";

export function Header() {
    return (
    <div>
        <header className={styles.header}>
            <Logo/>
            <Menu/>
            <User/>
        </header>
    </div>
    )
}