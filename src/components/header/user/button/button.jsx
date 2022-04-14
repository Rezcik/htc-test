import React, {useState} from 'react';
import styles from './button.module.css';
import classNames from "classnames";
import {Modal} from "../../../modal/modal";

export function Button({name, type, setModal, modal}) {

    return (
        <button className={classNames(type === 'authorization' ? styles.authorization : styles.registration, styles.button)}
                onClick={() => {
                    setModal({...modal, type: type, active: true})
                }
                }>
            {name}
        </button>
    )
}