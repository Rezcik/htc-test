import React from 'react';
import styles from './about.module.css';
import {Title} from "../../components/title/title";

export function About() {
    return (
        <div className={styles.about}>
            <Title name='О проекте'/>
            <div className={styles.wrapper}>
                <p className={styles.text}>Данный проект создан по мотивам приключений Рика и Морти.
                    Здесь вы можете поближе познакомиться со всеми персонажами,
                    эпизодами и локациями данного мультсериала.</p>
                <p className={styles.text}> Проект является тестовым заданием для входящих кандидатов пула Frontend.
                    В зависимости от грейда кандидата необходимо выполнить соответствующий список заданий.
                    Желаем удачи!</p>
            </div>
        </div>
    )
}