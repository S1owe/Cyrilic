import React from 'react';
import ReactDOM from 'react-dom';
import Head from './header'
import Footer from './footer'
import  Signup from './signup'


ReactDOM.render(<Head />, document.getElementById('head'));
ReactDOM.render(<Signup />, document.getElementById('signup'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
