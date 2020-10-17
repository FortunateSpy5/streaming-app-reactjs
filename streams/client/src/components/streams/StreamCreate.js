import React from "react";
import {Field, reduxForm} from "redux-form";
import { createStream } from "../../actions";
import { connect } from "react-redux";

class StreamCreate extends React.Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="meta">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <div className="ui centered large header">Create Stream</div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Title"/>
                    <Field name="description" component={this.renderInput} label="Enter Description"/>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>

        );
    }
}

const validate = (formValues) => {
    const error = {};
    if (!formValues.title) {
        error.title = 'You must enter a title';
    }
    if (!formValues.description) {
        error.description = 'You must enter a description';
    }
    return error;
};

const formWrapped = reduxForm({
    form: 'StreamCreate',
    validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);