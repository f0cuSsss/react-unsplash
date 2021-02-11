import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../styles/Header.css'
import SearchBar from './contents/SearchBar'

const Header = (props) => {

    return (
        <header>
            <Link className="header__title" to="/">
                <span>Unsplash</span>
            </Link>
            <SearchBar />
            <div className="actions-navbar">
                <Link className="favorite" to="/favorite">
                    <i className="ui icon star large" />
                    <span>{props.favoriteCount === 0 ? '' : (props.favoriteCount > 9 ? '9+' : props.favoriteCount) }</span>
                </Link>
                
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return { user: state.current_user, favoriteCount: state.favorite_images.length }
}

export default connect(mapStateToProps)(Header);