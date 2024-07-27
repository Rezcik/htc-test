import React from 'react';
import {CardLine} from '../card/line/cardLine';
import {CardGrid} from '../card/grid/cardGrid';
import styles from './list.module.css';


export function List({data, direction}) {
    return (
        <div className={styles.list}>
            {data.results?.map(result => (
                direction?
                <CardLine key={result.id} {...result}/>
                :
                <CardGrid key={result.id} {...result}/>
            ))}
        </div>
    );
}