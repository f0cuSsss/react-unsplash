import React from 'react'
import { connect } from 'react-redux'

import ImageList from './ImageList'

const SearchedList = props => {

    return (
        <div style={{ padding: '10px' }}>
            <ImageList images={props.images}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { images: state.images }
}

export default connect(mapStateToProps)(SearchedList);