import React, {useEffect, useState} from 'react';
import {Title} from '../../../components/title/title';
import styles from './characters.module.css';
import {Input} from '../../../components/input/input';
import {Select} from '../../../components/select/select';
import {Direction} from '../../../components/direction/direction';
import {List} from './list/list';
import {Pagination} from '../../../components/pagination/pagination';
import {Fetch} from '../fetch/fetch';
import {useSearchParams} from 'react-router-dom';

export function Characters() {
    const [direction, setDirection] = useState(true);
    const [filter, setFilter] = useState({}); //name: '', species: '', status: ''
    const [currentPage, setCurrentPage] = useState(`character/${window.location.search}`);
    const [data, setData] = useState({ results: [] });
    const [searchParams, setSearchParams] = useSearchParams(window.location.search);

    useEffect(() => {
        Fetch({currentPage, searchParams, setData})
        setSearchParams(filter);
    },[searchParams, filter]);

    return (
        <div className={styles.characters}>
            <Title name='Персонажи'/>
            <div className={styles.search}>
                <Input title='Поиск по имени'
                       placeholder='Введите имя персонажа'
                       width={true}
                       type='name'
                       setFilter={setFilter}
                       filter={filter}
                />

                <Input title='Поиск по расе'
                       placeholder='Введите расу персонажа'
                       width={false}
                       type='species'
                       setFilter={setFilter}
                       filter={filter}
                />
                <Select title='Поиск по статусу'
                        placeholder='Выберете статус персонажа'
                        type='status'
                        setFilter={setFilter}
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
