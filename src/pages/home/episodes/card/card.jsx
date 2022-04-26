import React, {useEffect, useState} from 'react';
import axios from 'axios';
import card from './card.module.css';

import {ReactComponent as AddFavourites} from '../../../../assets/icon/addFavourites.svg'
import classNames from 'classnames';
import {ReactComponent as Like} from '../../../../assets/icon/like.svg';
import {setStorage} from '../../../../components/storage/storage';


export function Card({name, episode, air_date, characters, sort, url}) {
    const [save, setSave] = useState(false);
    const [charactersNames, setCharactersNames] = useState([]);

    useEffect(() => {
        Promise.all(characters.map(character => axios(character)))
            .then(charactersInfo => {
                setCharactersNames(charactersInfo.map(el => el.data.name));
            });
    }, [characters])

    return (
        <div className={card.card}>
            <p className={card.name}>{name}</p>
                {save ? (
                    <button className={classNames(save? card.save : '', card.favorites)}
                            onClick={() => setStorage(sort, url, save, setSave)}>
                        <Like/>
                        <span>В избранном</span>
                    </button>)
                    :(
                    <button className={card.favorites}
                            onClick={() => setStorage(sort, url, save, setSave)}>
                        <AddFavourites/>
                        <span>Добавить в избранное</span>
                    </button>)
                }
            <div className={card.wrapper}>
                <div>
                    <p className={card.title}>Эпизод:</p>
                    <p className={card.value}>{episode}</p>
                    <p className={card.title}>Дата выхода::</p>
                    <p className={card.value}>{air_date}</p>
                </div>
                <div className={card.column}>
                    <div>
                        <p className={card.title}>Персонажи, учавствующие в эпизоде:</p>
                        <p className={card.value}>{charactersNames.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}