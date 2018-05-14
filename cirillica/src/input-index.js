import React from 'react';
import ReactDOM from 'react-dom';
import Head from './header'
import Footer from './footer'
import  Input from './input'


ReactDOM.render(<Head />, document.getElementById('head'));
ReactDOM.render(<Input />, document.getElementById('input1'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
