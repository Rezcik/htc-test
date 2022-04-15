import React from 'react';
import styles from './noMatch.module.css';

import noMatch from '../../assets/img/404.png';
import {ReactComponent as ToHome} from '../../assets/icon/to_home.svg'
import {Link} from "react-router-dom";

export function NoMatch() {
    return (
        <div className={styles.no_match}>
            <img src={noMatch} alt='404'/>
            <p className={styles.title}>Усп. Кажется вы заблудились. Только без паники!</p>
            <p className={styles.sub_title}>Страница, которую вы ищите не существует, либо была удалена</p>
            <Link to='home' className={styles.button}>
                <ToHome/>
                Домой
            </Link>
        </div>
    )
}