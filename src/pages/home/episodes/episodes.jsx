import React, {useEffect, useState} from 'react';
import styles from './episodes.module.css';
import {List} from './list/list';
import {Pagination} from '../../../components/pagination/pagination';
import {Fetch} from '../fetch/fetch';
import {Title} from '../../../components/title/title';
import {Input} from '../../../components/input/input';
import {useSearchParams} from 'react-router-dom';

export function Episodes() {
    const [currentPage, setCurrentPage] = useState(`episode/${window.location.search}`);
    const [data, setData] = useState({ results: [] });
    const [filter, setFilter] = useState({});//name: '', episode: ''
    const [searchParams, setSearchParams] = useSearchParams(window.location.search);

    useEffect(() => {
        Fetch({currentPage, searchParams, setData})
        setSearchParams(filter);
    },[searchParams, filter]);

    return (
        <div>
            <Title name='Эпизоды'/>
            <div className={styles.search}>
                <Input title='Поиск по названию'
                       placeholder='Введите название серии'
                       width={true}
                       type='name'
                       setFilter={setFilter}
                       filter={filter}
                />

                <Input title='Поиск по эпизоду'
                       placeholder='Введите эпизод: '
                       width={true}
                       type='episode'
                       setFilter={setFilter}
                       filter={filter}
                />
            </div>
            <div className={styles.content}>
                <List data={data} setData={setData}/>
            </div>
            <Pagination data={data} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    );
}
