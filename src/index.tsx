import React from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import Header from "./components/Header";
import { Counter } from "./components/Counter";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Route exact path='/' component={App} />
      <Route path='/counter' component={Counter} />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
