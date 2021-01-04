import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import '../../styles/SearchBar.css'
import { fetchPhotos, setNextPage, clearImagesArray } from '../../actions'

class SearchBar extends React.Component {

    renderInput = ({ input, placeholder }) => {
        return <input {...input} placeholder={placeholder} />;
    }

    onSubmit = () => {
        this.props.setNextPage(0);
        this.props.clearImagesArray();
        this.props.fetchPhotos();
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="search-bar">
                <Field name="searchterm" component={this.renderInput} placeholder="Search a photo..." />
            </form>
        );
    }
}

export default connect(null, { fetchPhotos, setNextPage, clearImagesArray })(reduxForm({
    form: 'SearchBar'
})(SearchBar));