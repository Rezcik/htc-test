import React, {useEffect, useState} from 'react';
import styles from './locations.module.css';
import {List} from './list/list';
import {Pagination} from '../../../components/pagination/pagination';
import {getDataAPI} from '../fetch/getDataAPI';
import {Title} from '../../../components/title/title';
import {Input} from '../../../components/input/input';
import {useSearchParams} from 'react-router-dom';

export function Locations() {
    const [filter, setFilter] = useState({});//name: '', type: '', dimension: ''
    const [currentPage, setCurrentPage] = useState(`location/${window.location.search}`);
    const [data, setData] = useState({ results: [] });
    const [searchParams, setSearchParams] = useSearchParams(window.location.search);

    useEffect(() => {
        getDataAPI({currentPage, searchParams, setData})
        setSearchParams(filter);
    },[searchParams, filter]);

    return (
        <div>
            <Title name='Локации'/>
            <div className={styles.search}>
                <Input title='Поиск по названию'
                       placeholder='Введите название локации'
                       width={true}
                       type='name'
                       setFilter={setFilter}
                       filter={filter}
                />

                <Input title='Поиск по типу'
                       placeholder='Введите тип локации'
                       width={true}
                       type='type'
                       setFilter={setFilter}
                       filter={filter}
                />
                <Input title='Поиск по измерению'
                       placeholder='Введите измерение'
                       width={true}
                       type='dimension'
                       setFilter={setFilter}
                       filter={filter}
                />
            </div>
            <div className={styles.content}>
                <List data={data}/>
            </div>
            <Pagination data={data} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    );
}
