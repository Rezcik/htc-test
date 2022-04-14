import React, {useEffect, useRef, useState} from "react";
import {Card} from "../card/card";
import styles from './list.module.css';
import {Fetch} from "../../fetch/fetch";
import axios from "axios";

export function List({data}) {
    /*const characterRef = useRef('');
    const [char, setChar] = useState({results: []});
    let arr = [];

    Promise.all(data.results?.map(async result => {
            const result = await axios(url);
            characterRef.current = result.data?.name;
        }
    )).then(results => {
        console.log(characterRef.current)})
*/
    return (
        <ul className={styles.list}>
            {data.results?.map(result =>
                <Card key={result.id}
                      name={result.name}
                      episode={result.episode}
                      air_date={result.air_date}
                      characters={result.characters}
                      sort={'episode'}
                      url={result.url}
                />
            )}
        </ul>
    );
}