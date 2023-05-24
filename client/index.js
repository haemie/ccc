// var express = require('express');
// var app = express();
// var path = require('path');

// app.use(express.static(path.resolve(__dirname, '..'))); //serves the index.html

import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

// uncomment so that webpack can bundle styles
import styles from './styles/styles.css';

render(<App />, document.querySelector('#root'));