import React from 'react';
import styles from './direction.module.css';

import {ReactComponent as Grid} from '../../assets/icon/grid.svg';
import {ReactComponent as Line} from '../../assets/icon/line.svg';
import classNames from 'classnames';

export function Direction({direction, setDirection}) {

    return (
        <div className={styles.sort}>
            <p className={styles.title}>Вид:</p>
            <div className={styles.wrapper}>
                <div className={classNames(direction ? styles.active : '', styles.item)} onClick={() => setDirection(true)}>
                    <Line/>
                </div>
                <div className={classNames(direction ? '' : styles.active, styles.item)} onClick={() => setDirection(false)}>
                    <Grid/>
                </div>
            </div>
        </div>
    );
}