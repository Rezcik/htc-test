import React, {useEffect, useRef, useState} from "react";
import {Title} from "../../../components/title/title";
import styles from './characters.module.css';
import {Input} from "../../../components/input/input";
import {Select} from "../../../components/select/select";
import {Direction} from "../../../components/direction/direction";
import {List} from "./list/list";
import {Pagination} from "../../../components/pagination/pagination";
import {Fetch} from "../fetch/fetch";
import axios from "axios";


export function Characters() {
    const [direction, setDirection] = useState(true);
    const [filter, setFilter] = useState({name: '', species: '', status: ''});
    const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/character/?');
    const [data, setData] = useState({ results: [] });

    const setQuery = (filterName) => (value) => {
        setFilter(filter => ({...filter, [filterName]: filterName + '=' + value + '&'}));
    };

    useEffect(() => {
        setCurrentPage(`https://rickandmortyapi.com/api/character/?${filter.name + filter.species + filter.status}`);
    }, [filter]);

    useEffect(() => {
        Fetch({currentPage, setData})
    },[currentPage]);

    return (
        <div className={styles.characters}>
            <Title name='Персонажи'/>
            <div className={styles.search}>
                <Input title='Поиск по имени'
                       placeholder='Введите имя персонажа'
                       width={true}
                       setFilter={setQuery("name")}
                />

                <Input title='Поиск по расе'
                       placeholder='Введите расу персонажа'
                       width={false}
                       setFilter={setQuery("species")}
                />
                <Select title='Поиск по статусу'
                        placeholder='Выберете статус персонажа'
                        setFilter={setQuery("status")}
                />
                <Direction direction={direction} setDirection={setDirection}/>
            </div>
            <div className={styles.content}>
                <List data={data} direction={direction}/>
            </div>
            <Pagination data={data} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    );
}