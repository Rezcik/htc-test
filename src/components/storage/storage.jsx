import React from 'react';

export function setStorage(type, url, save, setSave) {

    if(!save) {
        setLocalStorage(url, type, setSave)
    } else {
        removeLocalStorage(url, setSave)
    }
    console.log(url, type, save);
}

const setLocalStorage = (url, type, setSave) => {
    localStorage.setItem(url, type);
    setSave(true)
}
const removeLocalStorage = (url, setSave) => {
    localStorage.removeItem(url);
    setSave(false)
}
const getLocalStorage = (type, setSave) => {
    localStorage.getItem(type);
}
/*
const setUser = () => {
    let user = {
        login: '1',
        password: '2',
        name: '3',
        surname: '4',
        email: '5',
        isRegistered: false,
        favourites: {}
    }
    setLocalStorage(user.login, user);
    console.log(getLocalStorage(1));
}
setUser();*/