import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './App';
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'

import './index.css';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveState(store.getState())
})


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
