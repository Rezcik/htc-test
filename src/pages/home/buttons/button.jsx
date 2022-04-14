import React from 'react';
import styles from './button.module.css';
import {Link} from "react-router-dom";

export function Button({to, img, title, descriptions}) {
    return (
        <div className={styles.button}>
            <Link to={to}>
                <img src={img} alt={'Постер'}/>
                <p className={styles.title}>{title}</p>
                <p className={styles.descriptions}>{descriptions}</p>
            </Link>
        </div>
    )
}