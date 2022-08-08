import React, {useState} from 'react';
import styles from './select.module.css';
import classNames from 'classnames';
import svg from '../../assets/icon/show.svg';

export function Select({title, placeholder, setFilter, type}) {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div className={styles.wrapper} onClick={() => setActive(true)}>
            <p className={styles.title}>{title}</p>
            <input className={classNames(active ? styles.select__active : '',styles.select)}
                   placeholder={placeholder}
                   disabled
                   value={value}/>
            <img className={styles.svg} src={svg} alt='svg'/>
            <ul className={classNames(active ? styles.list__active : '', styles.list)}
                onClick={(e) => {
                    e.stopPropagation();
                    setActive(false)
                }}
                onMouseLeave={() => setActive(false)}>
                <li onClick={() => {
                    setFilter(filter => ({...filter, [type]: 'alive'}));
                    setValue('Живой')
                }}>
                    <span>Живой</span>
                </li>
                <li onClick={() => {
                    setFilter(filter => ({...filter, [type]: 'dead'}));
                    setValue('Мертв')
                }}>
                    <span>Мертв</span>
                </li>
                <li onClick={() => {
                    setFilter(filter => ({...filter, [type]: 'unknown'}));
                    setValue('Неизвестно')
                }}>
                    <span>Неизвестно</span>
                </li>
            </ul>
        </div>
    );
}
