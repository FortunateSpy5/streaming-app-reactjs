import React, {useEffect} from "react";
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../actions";
import {Link} from "react-router-dom";

const renderActions = (props) => {
    return (
        <React.Fragment>
            <button
                onClick={() => {
                    props.deleteStream(props.match.params.id)
                }}
                className="ui negative button"
            >
                Delete
            </button>
            <Link className="ui grey button" to="/">Cancel</Link>
        </React.Fragment>
    );
}

const renderContent = (props) => {
    if (props.stream) {
        return (
            <React.Fragment>
                <div>
                    <strong>Title:</strong> {props.stream.title}
                </div>
                <div>
                    <strong>Description:</strong> {props.stream.description}
                </div>
                <br/>
                <p>Are you sure you want to delete this stream?</p>
            </React.Fragment>
        );
    } else {
        return <div>Loading...</div>
    }
};

const StreamDelete = (props) => {
    useEffect(() => {
        props.fetchStream(props.match.params.id);
    }, []);

    return (
        <Modal
            title="Delete Stream"
            content={renderContent(props)}
            actions={renderActions(props)}
            onDismiss={() => {
                history.push('/')
            }}
        />
    );
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);