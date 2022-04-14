import React, {useState} from "react";
import styles from "./input.module.css";
import {User} from "../../storage/storage";

export function Input({placeholder, type, max, min}) {
    return (
        <div className={styles.wrapper}>
            <input className={styles.input}
                   placeholder={placeholder}
                   required={true}
                   type={type}
                   maxLength={max}
                   minLength={min}
                   onBlur={(e) => Validation(e.target.value, type)}
            />
        </div>
    );
}

function Validation(value, type) {
    const [user, setUser] = useState({login: '', password: '', name: '', surname: '', email: ''})

    let email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let password = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,50}/g;
    let login = /[0-9a-zA-Z]{6,20}/g;
    let name = /[a-zA-Zа-яёА-Я]{2,50}/g;
    let surname = /[^a-zA-Zа-яёА-Я]{2,50}/g;
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
            if(surname.test(value)) {
                return setUser(user => ({...user, surname: value}));
            }
    }
}