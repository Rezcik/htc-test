import React from "react";
import {useNavigate} from "react-router";

import styles from './title.module.css';
import {ReactComponent as Back} from '../../assets/icon/back.svg';

export function Title({name}) {
    const navigate = useNavigate();
    return (
        <div className={styles.title}>
            <button onClick={() => navigate(-1)} className={styles.back}>
                <Back/>
                <span>Назад</span>
            </button>
            <h2 className={styles.name}>{name}</h2>
        </div>
    );
}