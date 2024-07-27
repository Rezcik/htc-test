import React from 'react';
import axios from 'axios';

export async function getDataAPI({currentPage, searchParams, setData}) {
    const apiURL = new URL(currentPage, 'https://rickandmortyapi.com/api/');

    for(let [name, value] of searchParams) {
        apiURL.searchParams.set(name, value);
        console.log(name, value)
    }

    try {
        const result = await axios(apiURL.href);
        return setData(result.data);
    } catch (err) {
        console.log('ошибка ' + err)
    }
}
