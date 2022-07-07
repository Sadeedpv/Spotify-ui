import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateReducer } from './utils/Statereducer';
import  reducer, { initialState } from './utils/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateReducer initialState={initialState} reducer={reducer}>
      <App />
    </StateReducer>
);
