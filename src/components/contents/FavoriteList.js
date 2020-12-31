import React from 'react'
import { connect } from 'react-redux'

import ImageList from './ImageList'

const FavoriteList = (props) => {

    return (
        <div style={{ padding: '10px' }}>
            <ImageList images={props.images}/>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state.favorite_images)
    return { images: state.favorite_images }
}

export default connect(mapStateToProps)(FavoriteList);