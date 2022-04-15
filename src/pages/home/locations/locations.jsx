import React, {useEffect, useState} from "react";
import styles from "./locations.module.css";
import {List} from "./list/list";
import {Pagination} from "../../../components/pagination/pagination";
import {Fetch} from "../fetch/fetch";
import {Title} from "../../../components/title/title";
import {Input} from "../../../components/input/input";

export function Locations() {
    const [filter, setFilter] = useState({name: '', type: '', dimension: ''});
    const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/location/?');
    const [data, setData] = useState({ results: [] });

    const setQuery = (filterName) => (value) => {
        setFilter(filter => ({...filter, [filterName]: filterName + '=' + value + '&'}));
    };

    useEffect(() =>{
        setCurrentPage(`https://rickandmortyapi.com/api/location/?${filter.name + filter.type + filter.dimension}`);
    },[filter]);

    useEffect(() =>{
        Fetch({currentPage, setData})
    },[currentPage]);

    return (
        <div>
            <Title name='Локации'/>
            <div className={styles.search}>
                <Input title='Поиск по названию'
                       placeholder='Введите название локации'
                       width={true}
                       setFilter={setQuery("name")}
                />

                <Input title='Поиск по типу'
                       placeholder='Введите тип локации'
                       width={true}
                       setFilter={setQuery("type")}
                />
                <Input title='Поиск по измерению'
                       placeholder='Введите измерение'
                       width={true}
                       setFilter={setQuery("dimension")}
                />
            </div>
            <div className={styles.content}>
                <List data={data}/>
            </div>
            <Pagination data={data} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    );
}