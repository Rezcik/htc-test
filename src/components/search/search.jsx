import React, {useEffect, useState} from "react";

export function Search(setCurrentPage, filter) {
    const setQuery = (filterName) => (value) => {
        setFilter(filter => ({...filter, [filterName]: filterName + '=' + value + '&'}));
        setCurrentPage(`https://rickandmortyapi.com/api/character/?${filter.species + filter.name + filter.status}`);
    };
    return (
        setCurrentPage(`https://rickandmortyapi.com/api/character/?${filter.species}${filter.name}${filter.status}`)
    );
}