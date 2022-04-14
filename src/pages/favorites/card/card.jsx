import React, {useState} from "react";
import stylesGrid from './grid.module.css';
import card from '../card.module.css';
import classNames from "classnames";

import {ReactComponent as LineAddFavorites} from '../../../../../assets/icon/addFavorites.svg'


export function Card({img, name, species, origin, location, gender, episode, status, direction}) {
    let statusColor = null;
    switch (status) {
        case 'Dead' : status = 'Мертв'; statusColor = card.dead; break;
        case 'Alive' : status = 'Живой'; statusColor = card.alive; break;
        case 'unknown' : status = 'Неизвестно'; statusColor = card.unknown; break;
    }

    return (
        <div className={classNames(card.card, stylesGrid.card)}>
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
                    <div className={stylesGrid.column}>
                        <button className={stylesGrid.favorites}>
                            <LineAddFavorites/>
                        </button>
                        <ul className={statusColor}>
                            <li>
                                <span className={card.status}>{status}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}