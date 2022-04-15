import React, {useState} from "react";
import styles from "./input.module.css";
import {ReactComponent as Show} from "../../../assets/icon/show_pass.svg"
import {ReactComponent as Hide} from "../../../assets/icon/hide_pass.svg"

export function Input({placeholder, type, max, min, user, setUser, setType, hide}) {
    const [visible, setVisible] = useState(false);
    return (
        <div className={styles.wrapper}>
            <input className={styles.input}
                   placeholder={placeholder}
                   required={true}
                   type={type}
                   maxLength={max}
                   minLength={min}
                   onBlur={(e) => Validation(e.target.value, type, setUser, user)}
            />
            {hide?
                <div className={styles.hide_show} onClick={() => SwitchVisible({visible, setVisible, type, setType})}>
                    {visible?
                        <Show/>
                        :
                        <Hide/>
                    }
                </div>
                :
                <div></div>
            }
        </div>
    );
}

function SwitchVisible({visible, setVisible, setType}){
    if(visible) {
        setType('text')
        setVisible(false)
    } else {
        setType('password')
        setVisible(true)
    }
}

function Validation(value, type, setUser) {

    let email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let password = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,50}/g;
    let login = /[0-9a-zA-Z]{6,20}/g;
    let name = /[a-zA-Zа-яёА-Я]{2,50}/g;
    switch (type) {
        case ('email') :
            if(email.test(value)) {
                return setUser( user => ({...user, email: value}));
            }
        case('password') :
            if(password.test(value)) {
                return setUser(user => ({...user, password: value}));
            }
        case('login') :
            if(login.test(value)) {
                return setUser(user => ({...user, login: value}));
            }
        case('name') :
            if(name.test(value)) {
                return setUser(user => ({...user, name: value}));
            }
        case('surname') :
            if(name.test(value)) {
                return setUser(user => ({...user, surname: value}));
            }
    }
}