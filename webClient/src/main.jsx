import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App.jsx';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/root.jsx';

const createStoreWithMiddleWare = applyMiddleware()(createStore)

render(
	<Provider store={createStoreWithMiddleWare(reducers)}>
 	<App />
 </Provider>
, document.getElementById("root"))
