import React from "react";
import {connect} from "react-redux";
import {editStream, fetchStream} from "../../actions";
import StreamForm from "./StreamForm";
import _ from 'lodash';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>
                <i className="ui large center aligned loading icon" />
            </div>
        }
        return (
            <div>
                <div className="ui centered large header">Edit Stream</div>
                <StreamForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);