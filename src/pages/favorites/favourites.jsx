import React from 'react';
import styles from './favourites.module.css';
import {Title} from "../../components/title/title";
import {Button} from "./buttons/button";

export function Favourites() {
    return (
        <div className={styles.favourites}>
            <Title name='Избранное'/>
            <div className={styles.buttons}>
                <Button to='locations'
                        title='Локации'/>
                <Button to='characters'
                        title='Персонажи'/>
                <Button to='episodes'
                        title='Эпизоды'/>
            </div>
            <div>
            </div>
        </div>
    )
}