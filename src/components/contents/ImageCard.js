import React from 'react'
import { connect } from 'react-redux'

import { addToFavorite } from '../../actions'

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0, isFavorite: false }
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }

    addToFavorite = () => {
        this.props.addToFavorite(this.props.image);
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div className="image-box" style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img className="image-box__img" ref={this.imageRef} alt={description} src={urls.regular}/>
                <div className="image-box__action-block">
                    <div className="favorite-icon" onClick={this.addToFavorite}>
                         <i className={`ui icon star ${this.props.isFavorite ? '' : 'outline' } large`} />
                    </div>
                   <div className="expand-icon">
                        <i className="ui icon expand large" />
                   </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        isFavorite: 
            state.favorite_images.find(img => img.id === ownProps.image.id) 
            ? true : false
    }
}

export default connect(mapStateToProps, { addToFavorite })(ImageCard);