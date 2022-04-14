import React from "react";
import axios from "axios";


export async function Fetch({currentPage, setData}) {
    console.log(currentPage)
    try {
        const result = await axios(currentPage);
        console.log(result)
        return setData(result.data);
    } catch (err) {
        console.log('ошибка ' + err)
    }
}