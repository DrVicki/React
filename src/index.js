import React from 'react'
import ReactDOM from 'react-dom';
//import App from './App';

React.createElement('h1', {}, 'Hello World!');

const container = document.getElementById('app');

// create a root
const root = ReactDOM.createRoot(container);

//render app to root


ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
   	<div />
   </React.StrictMode>
);
