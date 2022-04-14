import React from 'react';
import styles from './home.module.css';
import {Button} from "./buttons/button";

import character from '../../assets/img/char.png';
import locations from '../../assets/img/loc.png';
import episodes from '../../assets/img/epi.png';

export function Home() {
    return (
        <div className={styles.home}>
            <Button to='characters'
                    title='Персонажи'
                    descriptions='Зайди и познакомься со всеми персонажами вселенной'
                    img={character}/>
            <Button to='locations'
                    title='Локации'
                    descriptions='Исследуй все локации. Давай же, не будь занудой!'
                    img={locations}/>
            <Button to='episodes'
                    title='Эпизоды'
                    descriptions='Узнай чуть больше о карте приключений Рика и Морти'
                    img={episodes}/>
        </div>
    )
}