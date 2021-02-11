import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import '../styles/Popup.css'
import { closePopup } from '../actions/index'

const Popup = props => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(props.image){
            setIsOpen(true);
        }
    }, [props.image]);

    const onOutClick = () => {
        setIsOpen(false);
        props.closePopup();
    }

    const renderPopUp = () => {
        if(props.image){
            const { urls, alt_description } = props.image;
            return (
                <div className={`popup-box ${isOpen ? 'open' : '' }`} onClick={onOutClick}>
                    <div className="popup-box__inner">
                        <img src={urls.regular} alt={alt_description}/>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className={`popup-box ${isOpen ? 'open' : '' }`} onClick={onOutClick}>
                    <div className="popup-box__inner">
                        <h1>Error! Please, try again.</h1>
                    </div>
                </div>
            );
        }
    }

    return renderPopUp();
}

const mapStateToProps = state => {
    return { image: state.popup.image }
}

export default connect(mapStateToProps, { closePopup })(Popup);