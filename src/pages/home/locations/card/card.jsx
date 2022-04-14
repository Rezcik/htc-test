import React, {useState} from "react";
import card from './card.module.css';

import {ReactComponent as AddFavourites} from '../../../../assets/icon/addFavourites.svg'
import classNames from "classnames";
import {ReactComponent as Like} from "../../../../assets/icon/like.svg";
import stylesGrid from "../../characters/card/grid/grid.module.css";
import {setStorage} from "../../../../components/storage/storage";


export function Card({name, type, dimension, residents, sort, url}) {
    const [save, setSave] = useState(false);

    return (
        <div className={card.card}>
            <p className={card.name}>{name}</p>
            <div className={card.wrapper}>
                <p className={card.title}>Тип:</p>
                <p className={card.value}>{type}</p>
                <p className={card.title}>Измерение:</p>
                <p className={card.value}>{dimension}</p>
                <div className={card.column}>
                    <p className={card.title}>Количество персонажей, которые в последний раз были замечены здесь:</p>
                    <p className={classNames(card.value, card.residents)}>{residents}</p>
                </div>
                <button className={classNames(save? card.save : '', card.favorites)}
                        onClick={() => setStorage(sort, url, save, setSave)}>
                    {save ?
                        <Like/>
                        :
                        <AddFavourites/>
                    }
                </button>
            </div>
        </div>
    );
}