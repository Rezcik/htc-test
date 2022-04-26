import React from 'react';
import styles from './button.module.css';
import {Link} from 'react-router-dom';

export function Button({to, title}) {
    return (
        <div className={styles.button}>
            <div className={styles.wrapper}>
                <Link to={to}>
                    <span className={styles.title}>{title}</span>
                </Link>
            </div>
        </div>
    )
}