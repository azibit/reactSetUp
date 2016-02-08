import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router, Route, Link} from 'react-router'
import routes from './routes';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history = { browserHistory } routes = { routes }/>
    </Provider>
    , document.getElementById('example'));
