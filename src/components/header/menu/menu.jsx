import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './menu.module.css';

export function Menu() {
    return (
        <div className={styles.menu}>
            <nav>
                <NavLink className={styles.button} to="/home">Главная</NavLink>
                <NavLink className={styles.button} to="/favourites" >Избранное</NavLink>
                <NavLink className={styles.button} to="/about" >О проекте</NavLink>
            </nav>
        </div>
    )
}