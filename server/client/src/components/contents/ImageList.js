import React from 'react'
import { connect } from 'react-redux'

import ImageCard from './ImageCard'
import '../../styles/ImageList.css'
import { setNextPage, fetchPhotos } from '../../actions'

const ImageList = props => {
    const images = props.images.map(( image ) => {
        return <ImageCard key={image.id} image={image} />
    });

    const onLoadMore = () => {
        props.setNextPage();
        props.fetchPhotos();
    }

    const renderContent = () => {
        if(props.images.length !== 0) {
            return (
                <div className="image-list-container">
                    <div className='image-list'>{images}</div>
                    <div className="button-container">
                        <div className="load-more__button" onClick={onLoadMore}>Load more</div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="image-list-container__empty">
                    <h2>{props.emptyTitle}</h2>
                </div>
            );
        }
    }

    return <div>{renderContent()}</div>
}

export default connect(null, { setNextPage, fetchPhotos })(ImageList);