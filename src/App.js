import React, { Component,Fragment } from 'react';
import Routes from "./Routes/Routes";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import "./App.css"

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk))
    return (
      <Fragment>
        <div className="container">
        <Provider store={store}>
          <Routes />
        </Provider>
        </div>
      </Fragment>
        
    )
  }
}
