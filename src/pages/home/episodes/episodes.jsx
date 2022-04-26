import React, {useEffect, useState} from 'react';
import styles from './episodes.module.css';
import {List} from './list/list';
import {Pagination} from '../../../components/pagination/pagination';
import {Fetch} from '../fetch/fetch';
import {Title} from '../../../components/title/title';
import {Input} from '../../../components/input/input';

export function Episodes() {
    const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/episode/?');
    const [data, setData] = useState({ results: [] });
    const [filter, setFilter] = useState({name: '', episode: ''});

    const setQuery = (filterName) => (value) => {
        setFilter(filter => ({...filter, [filterName]: filterName + '=' + value + '&'}));
    };

    useEffect(() =>{
        setCurrentPage(`https://rickandmortyapi.com/api/episode/?${filter.name + filter.episode}`);
    },[filter]);

    useEffect(() =>{
        Fetch({currentPage, setData})
    },[currentPage]);

    return (
        <div>
            <Title name='Эпизоды'/>
            <div className={styles.search}>
                <Input title='Поиск по названию'
                       placeholder='Введите название серии'
                       width={true}
                       setFilter={setQuery("name")}
                />

                <Input title='Поиск по эпизоду'
                       placeholder='Введите эпизод: '
                       width={true}
                       setFilter={setQuery("episode")}
                />
            </div>
            <div className={styles.content}>
                <List data={data} setData={setData}/>
            </div>
            <Pagination data={data} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    );
}