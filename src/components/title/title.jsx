import React, {useEffect} from 'react';
import {useNavigate} from 'react-router';

import styles from './title.module.css';
import {ReactComponent as Back} from '../../assets/icon/back.svg';

export function Title({name}) {
    const navigate = useNavigate();
    useEffect(() =>{
    })
    return (
        <div className={styles.title}>
            <button onClick={() => navigate('/home', {replace: true})} className={styles.back}>
                <Back/>
                <span>Назад</span>
            </button>
            <h1 className={styles.name}>{name}</h1>
        </div>
    );
}
