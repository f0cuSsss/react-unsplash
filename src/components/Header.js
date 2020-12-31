import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Header.css'
import SearchBar from './contents/SearchBar'

const Header = () => {

    return (
        <header>
            <Link className="header__title" to="/">
                <span>Unsplash</span>
            </Link>
            <SearchBar />
            <Link className="favorite" to="/favorite">
                <i className="ui icon star large" />
            </Link>
        </header>
    );
}

export default Header;