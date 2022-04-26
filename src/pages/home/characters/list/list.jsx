import React from 'react';
import {CardLine} from '../card/line/cardLine';
import {CardGrid} from '../card/grid/cardGrid';
import styles from './list.module.css';


export function List({data, direction}) {
    return (
        <div className={styles.list}>
            {data.results?.map(result => (
                direction?
                <CardLine key={result.id}
                          img={result.image}
                          name={result.name}
                          species={result.species}
                          status={result.status}
                          origin={result.origin.name}
                          location={result.location.name}
                          gender={result.gender}
                          episode={result.episode}
                          sort={'character'}
                          url={result.url}
                />
                :
                <CardGrid key={result.id}
                          img={result.image}
                          name={result.name}
                          species={result.species}
                          status={result.status}
                          origin={result.origin.name}
                          location={result.location.name}
                          sort={'character'}
                          url={result.url}
                />
            ))}
        </div>
    );
}