import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main/Main.jsx';
import fakeData from '../../assets/fakeData.js';

ReactDOM.render(<Main fakeData={fakeData} />, document.getElementById('app'));
