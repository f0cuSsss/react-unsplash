import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import '../styles/index.css'
import Header from './Header'
import SearchedList from './contents/SearchedList'
import FavoriteList from './contents/FavoriteList'

export default () => {
    return (
        <BrowserRouter>
            <div className="wrap">
                <Header />
                <div>
                    <Route path="/" exact component={SearchedList} />
                    <Route path="/favorite" component={FavoriteList} />
                </div>
            </div>
        </BrowserRouter>
    );
}