import React, {useEffect, useState} from 'react';
import stylesLine from './line.module.css';
import card from '../card.module.css';
import classNames from 'classnames';

import {ReactComponent as AddFavourites} from '../../../../../assets/icon/addFavourites.svg'
import {ReactComponent as Like} from '../../../../../assets/icon/like.svg'
import {setStorage} from '../../../../../components/storage/storage';
import axios from 'axios';
import {CardItem} from "../cardItem";


export function CardLine({image, name, species, origin, location, gender, episode, status, sort, url}) {
    const [save, setSave] = useState(false);
    const [episodes, setEpisodes] = useState([]);
    const [range, setRange] = useState([]);
    let statusColor = null;
    useEffect(() => {
        Promise.all(episode.map(episode => axios(episode)))
            .then(episodesList => {
                setEpisodes(episodesList.map(el => el.data.id));
            });

    }, [episode])

    useEffect(() => {
        let ranges = [], start, rend;
        for (let i = 0; i < episodes.length; i++) {
            start = episodes[i];
            rend = start;
            while (episodes[i + 1] - episodes[i] === 1) {
                rend = episodes[i + 1];
                i++;
            }
            ranges.push(start === rend ? start+'' : start + '-' + rend);
        }
        return setRange(ranges)

    }, [episodes])

    switch (status) {
        case 'Dead' : status = 'Мертв'; statusColor = card.dead; break;
        case 'Alive' : status = 'Живой'; statusColor = card.alive; break;
        case 'unknown' : status = 'Неизвестно'; statusColor = card.unknown; break;
    }
    return (
        <div className={classNames(card.card, stylesLine.card)}>
            <img src={image} className={card.img} alt='person'/>
            <div>
                <p className={card.name}>{name}</p>
                <div className={card.wrapper}>
                    <div className={card.column}>
                        <CardItem title={'Раса:'} value={species}/>
                        <CardItem title={'Место происхождения:'} value={origin.name}/>
                        <CardItem title={'Последняя локация:'} value={location.name}/>
                    </div>
                    <div className={card.column}>
                        <CardItem title={'Пол:'} value={gender}/>
                        <CardItem title={'Эпизоды:'} value={range.join(', ')}/>
                    </div>
                    <div className={stylesLine.column}>
                        <ul className={statusColor}>
                            <li>
                                <span className={card.status}>{status}</span>
                            </li>
                        </ul>
                        <button className={classNames(save? stylesLine.save : '', stylesLine.favorites)}
                                onClick={() => setStorage(sort, url, save, setSave)}>
                            {save ?
                                <>
                                    <Like/>
                                    <span>В избранном</span>
                                </>
                                :
                                <>
                                    <AddFavourites/>
                                    <span>Добавить в избранное</span>
                                </>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}