import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favicon from 'react-favicon';


var FILELISTS = [
    // {fileName: 'Android Mitrade apk', version: '1.0 (3)', time: '2019-01-21 13:00:34'},
    // {fileName: 'Android Mitrade apk', version: '1.0 (2)', time: '2019-01-21 11:20:45'},
    // {fileName: 'Android Mitrade apk', version: '1.0 (1)', time: '2019-01-21 10:53:17'}
  ];


ReactDOM.render(
        <div>
            <Favicon url="https://ota.mitrade.com/api/download/icon" />
            <App filelists={FILELISTS} />
        </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
