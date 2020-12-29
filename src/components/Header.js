import React from 'react'

import '../styles/Header.css'
import SearchBar from './contents/SearchBar'

const Header = () => {

    return (
        <header>
            <span>Unsplash</span>
            <SearchBar />
            <div className="favorite">
                <i className="ui icon star large" />
            </div>
        </header>
    );
}

export default Header;