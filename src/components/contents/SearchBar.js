import React from 'react'
import { Field, reduxForm } from 'redux-form'

import '../../styles/SearchBar.css'

class SearchBar extends React.Component {

    renderInput({ input, placeholder }) {
        return <input {...input} placeholder={placeholder} />;
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(() => {})} className="search-bar">
                <Field name="searchterm" component={this.renderInput} placeholder="Search a photo..." />
            </form>
        );
    }
}

export default reduxForm({
    form: 'SearchBar'
})(SearchBar);