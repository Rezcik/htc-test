import React, {useState} from 'react';
import styles from './user.module.css';
import {Button} from "./button/button";
import {Modal} from "../../modal/modal";

export function User() {
    const[modal, setModal] = useState({type: '', active: false});

    return (
        <div className={styles.user}>
            <Button name='Регистрация' type='registration' setModal={setModal} modal={modal}/>
            <Button name='Войти' type='authorization' setModal={setModal}/>
            <Modal setModal={setModal} modal={modal}/>
        </div>
    )
}