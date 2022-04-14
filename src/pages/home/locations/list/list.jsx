import React from "react";
import {Card} from "../card/card";
import styles from './list.module.css';

export function List({data}) {
    return (
        <ul className={styles.list}>
            {data.results?.map(result => (
                <Card key={result.id}
                      name={result.name}
                      type={result.type}
                      dimension={result.dimension}
                      residents={result.residents.length}
                      sort={'location'}
                      url={result.url}
                />
            ))}
        </ul>
    );
}