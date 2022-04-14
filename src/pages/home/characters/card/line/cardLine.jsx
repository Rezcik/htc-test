import React, {useState} from "react";
import stylesLine from './line.module.css';
import card from '../card.module.css';
import classNames from "classnames";

import {ReactComponent as AddFavourites} from '../../../../../assets/icon/addFavourites.svg'
import {ReactComponent as Like} from '../../../../../assets/icon/like.svg'
import {setStorage} from "../../../../../components/storage/storage";


export function CardLine({img, name, species, origin, location, gender, episode, status, direction, sort, url}) {
    const [save, setSave] = useState(false);
    let statusColor = null;
    switch (status) {
        case 'Dead' : status = 'Мертв'; statusColor = card.dead; break;
        case 'Alive' : status = 'Живой'; statusColor = card.alive; break;
        case 'unknown' : status = 'Неизвестно'; statusColor = card.unknown; break;
    }
    return (
        <div className={classNames(card.card, stylesLine.card)}>
            <img src={img} className={card.img}/>
            <div>
                <p className={card.name}>{name}</p>
                <div className={card.wrapper}>
                    <div className={card.column}>
                        <p className={card.item}>
                            <span className={card.title}>Раса:</span>
                            <span className={card.value}>{species}</span>
                        </p>
                        <p className={card.item}>
                            <span className={card.title}>Место происхождения:</span>
                            <span className={card.value}>{origin}</span>
                        </p>
                        <p className={card.item}>
                            <span className={card.title}>Последняя локация:</span>
                            <span className={card.value}>{location}</span>
                        </p>
                    </div>
                    <div className={card.column}>
                        <p className={card.item}>
                            <span className={card.title}>Пол:</span>
                            <span className={card.value}>{gender}</span>
                        </p>
                        <p className={card.item}>
                            <span className={card.title}>Эпизоды:</span>
                            <span className={card.value}></span>
                        </p>
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
                                <Like/>
                                :
                                <AddFavourites/>
                            }
                            <span>
                                Добавить в избранное
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}