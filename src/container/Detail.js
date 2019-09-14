import React, { Component } from 'react';
import { connect } from "react-redux";
import {getData} from "../redux/action/homeAction";

class Detail extends Component {
    render() {
        const { id } = this.props.match.params;
        const { data } =this.props.home;
        return (
            <div>
            <div dangerouslySetInnerHTML={{ __html: data[id - 1].description }} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        home: state.homeReducer
    };
};

export default connect(mapStateToProps,{getData})(Detail);