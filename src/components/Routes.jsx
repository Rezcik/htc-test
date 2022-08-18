import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';

import styles from './content.module.css';
import {Home} from '../pages/home/home';
import {Characters} from '../pages/home/characters/characters';
import {Locations} from '../pages/home/locations/locations';
import {Episodes} from '../pages/home/episodes/episodes';
import {About} from '../pages/about/about';
import {Favourites} from '../pages/favorites/favourites';
import {NoMatch} from '../pages/noMatch/noMatch';

export function Content() {
    return (
        <div className={styles.content}>
            <Routes>
                <Route index path='/' element={<Navigate to="/home" /> }/>
                <Route path='home' element={<Home/>}/>
                <Route path='home/characters' element={<Characters/>}/>
                <Route path='home/locations' element={<Locations/>}/>
                <Route path='home/episodes' element={<Episodes/>}/>
                <Route path='favourites' element={<Favourites/>} />
                <Route path='favourites/characters' element={<Favourites/>} />
                <Route path='favourites/locations' element={<Favourites/>} />
                <Route path='favourites/episodes' element={<Favourites/>} />
                <Route path='about' element={<About/>} />
                <Route path='*' element={<NoMatch/>} />
            </Routes>
        </div>
    );
}
