import React from 'react';
import axios from 'axios';


export async function Fetch({currentPage, setData}) {
    try {
        const result = await axios(currentPage);
        return setData(result.data);
    } catch (err) {
        console.log('ошибка ' + err)
    }
}