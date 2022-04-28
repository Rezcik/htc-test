import React from 'react';
import styles from './favourites.module.css';
import {Title} from '../../components/title/title';
import {Button} from './buttons/button';
import char_min from '../../assets/img/char_min.png';
import loc_min from '../../assets/img/loc_min.png';
import epi_min from '../../assets/img/epi_min.png';

export function Favourites() {
    return (
        <div className={styles.favourites}>
            <Title name='Избранное'/>
            <div className={styles.buttons}>
                <Button to='locations'
                        title='Локации'
                        img={loc_min}
                />
                <Button to='characters'
                        title='Персонажи'
                        img={char_min}
                />
                <Button to='episodes'
                        title='Эпизоды'
                        img={epi_min}
                />
            </div>
            <div>
            </div>
        </div>
    )
}