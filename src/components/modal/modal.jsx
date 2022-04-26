import React, { useState } from 'react';
import styles from './modal.module.css';
import { Input, Validation } from './input/input';
import classNames from 'classnames';
import rick from '../../assets/img/rick.png';
import morty from '../../assets/img/morty.png';
import rick_green from '../../assets/img/rick_green.png';

export const Modal = ({modal, setModal}) => {
    const [user, setUser] = useState({login: '', password: '', name: '', surname: '', email: ''})

    if(!modal.active) return null;
    return (
        <div className={classNames(modal.active ? styles.active : '', styles.wrapper)}
             onClick={() => {
                 setModal({...modal, active: false})
             }}>
            <div onClick={(e) => e.stopPropagation()}>
            {modal.type === 'authorization' ?
                <Authorization/>
                :
                <Registration setUser={setUser}/>
            }
            </div>
        </div>
    )
}

function Authorization() {

    return (
        <form className={styles.modal}>
            <h2 className={styles.authorization}>Вход</h2>
            <Input placeholder='Введите логин или E-mail' />
            <Input placeholder='Введите  пароль'/>
            <button type={"button"} className={styles.button}>Войти</button>
            <img className={styles.rick} src={rick} alt='rick'/>
            <img className={styles.morty} src={morty} alt='morty'/>
            <img className={styles.rick_green} src={rick_green} alt='rick_green'/>
        </form>
    )
}

function Registration({setUser, user}) {

    const [type, setType] = useState('password')

    return (
        <form className={styles.modal}>
            <h2 className={styles.registration}>Регистрация</h2>
            <Input placeholder='Введите E-mail' type={"email"} min={6} max={50} setUser={setUser} user={user}/>
            <Input placeholder='Придумайте логин' type={"login"} min={6} max={20} setUser={setUser} user={user}/>
            <Input placeholder='Введите имя' type={"name"} min={2} max={50} setUser={setUser} user={user}/>
            <Input placeholder='Введите фамилию' type={"surname"} min={2} max={50} setUser={setUser} user={user}/>
            <Input placeholder='Введите  пароль' hide={true} type={type} setType={setType} min={6} max={50} setUser={setUser} user={user}/>
            <Input placeholder='Повторите  пароль' hide={true} type={type} setType={setType} min={6} max={50} setUser={setUser} user={user}/>
            <button className={styles.button} onClick={()=> console.log(user)}>Зарегистрировать</button>
            <img className={styles.rick} src={rick} alt='rick'/>
            <img className={styles.morty} src={morty} alt='morty'/>
            <img className={styles.rick_green} src={rick_green} alt='rick_green'/>
        </form>
    )
}