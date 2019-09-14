import React, { Component } from 'react'
import axios from "axios";
import { getData } from "../redux/action/homeAction"
import { connect } from "react-redux";
import "../style/Home.css"
import {Link} from "react-router-dom";

class Home extends Component {
    componentDidMount() {
        axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/the-story")
            .then(resp => {
                console.log(resp.data);
                const { items } = resp.data;
                this.props.getData(items)
            })

    }
    render() {
        console.log(this.props.home);
        const { data } = this.props.home
        return (
            <div>
                {data &&
                    data.map((item, index) => (
                        <div className="main cf">
                            <Link to= {`/detail/${index + 1}`}><h2>{item.title}</h2></Link>
                            <img className="img" src={item.thumbnail} alt="/" />
                            <p>{item.author}</p>
                            <i>{item.pubDate}</i>
                        </div>
                    ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        home: state.homeReducer
    };
};

export default connect(mapStateToProps, { getData })(Home);
