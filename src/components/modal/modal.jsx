import React, {useEffect, useState} from "react";
import styles from "./modal.module.css";
import {Input, Validation} from "./input/input";
import classNames from "classnames";
import rick from "../../assets/img/rick.png"
import morty from "../../assets/img/morty.png"

export const Modal = ({modal, setModal}) => {
    console.log(modal)
    if(!modal.active) return null;
    return (
        <div className={classNames(modal.active ? styles.active : '', styles.wrapper)}
             onClick={(e) => {
                 setModal({...modal, active: false})
             }}>
            <div onClick={(e) => e.stopPropagation()}>
            {modal.type === 'authorization' ?
                <Authorization/>
                :
                <Registration/>
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
            <img className={styles.rick} src={rick}/>
            <img className={styles.morty} src={morty}/>
        </form>
    )
}

function Registration() {

    return (
        <form className={styles.modal}>
            <h2 className={styles.registration}>Регистрация</h2>
            <Input placeholder='Введите E-mail' type={"email"} min={6} max={50}/>
            <Input placeholder='Придумайте логин' type={"login"} min={6} max={20}/>
            <Input placeholder='Введите имя' type={"name"} min={2} max={50}/>
            <Input placeholder='Введите фамилию' type={"surname"} min={2} max={50}/>
            <Input placeholder='Введите  пароль' type={"password"} min={6} max={50}/>
            <Input placeholder='Повторите  пароль' type={"password"} min={6} max={50}/>
            <button className={styles.button}>Зарегистрировать</button>
            <img className={styles.rick} src={rick}/>
            <img className={styles.morty} src={morty}/>
        </form>
    )
}