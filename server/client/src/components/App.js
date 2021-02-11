import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import '../styles/index.css'
import Header from './Header'
import SearchedList from './contents/SearchedList'
import FavoriteList from './contents/FavoriteList'
import { checkAuth } from '../actions'

class App extends React.Component {

    componentDidMount(){
        this.props.checkAuth();
    }

    render() {
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
}

export default connect(null, { checkAuth })(App);