import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import '../../styles/SearchBar.css'
import { fetchPhotos } from '../../actions'

class SearchBar extends React.Component {

    renderInput = ({ input, placeholder }) => {
        return <input {...input} placeholder={placeholder} />;
    }

    onSubmit = (formValues) => {
        this.props.fetchPhotos(formValues.searchterm);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="search-bar">
                <Field name="searchterm" component={this.renderInput} placeholder="Search a photo..." />
            </form>
        );
    }
}

export default connect(null, { fetchPhotos })(reduxForm({
    form: 'SearchBar'
})(SearchBar));