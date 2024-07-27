import React, {useState} from 'react';
import stylesGrid from './grid.module.css';
import card from '../card.module.css';
import classNames from 'classnames';

import {ReactComponent as AddFavourites} from '../../../../../assets/icon/addFavourites.svg'
import {ReactComponent as Like} from '../../../../../assets/icon/like.svg'
import {setStorage} from '../../../../../components/storage/storage';
import {CardItem} from "../cardItem";


export function CardGrid({image, name, species, origin, location, status, sort, url}) {
    const [save, setSave] = useState(false);
    let statusColor = null;
    switch (status) {
        case 'Dead' : status = 'Мертв'; statusColor = card.dead; break;
        case 'Alive' : status = 'Живой'; statusColor = card.alive; break;
        case 'unknown' : status = 'Неизвестно'; statusColor = card.unknown; break;
    }

    return (
        <div className={classNames(card.card, stylesGrid.card)}>
            <img src={image} className={card.img}/>
            <div>
                <p className={card.name}>{name}</p>
                <div className={card.wrapper}>
                    <div className={card.column}>
                        <CardItem title={'Раса:'} value={species}/>
                        <CardItem title={'Место происхождения:'} value={origin.name}/>
                        <CardItem title={'Последняя локация:'} value={location.name}/>
                    </div>
                    <div className={stylesGrid.column}>
                        <button className={classNames(save? stylesGrid.save : '', stylesGrid.favorites)}
                                onClick={() => setStorage(sort, url, save, setSave)}>
                            {save ?
                                <Like/>
                                :
                                <AddFavourites/>
                            }
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