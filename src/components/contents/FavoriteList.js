import React from 'react'
import { connect } from 'react-redux'

import ImageList from './ImageList'

const FavoriteList = (props) => {

    return (
        <div style={{ padding: '10px' }}>
            <ImageList emptyTitle="You do not have any favorite images" images={props.images}/>
        </div>
    );
}

const mapStateToProps = state => {
    return { images: state.favorite_images }
}

export default connect(mapStateToProps)(FavoriteList);