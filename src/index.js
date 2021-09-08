import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom";
import App from './App';
import ScrollToTop from './components/scrolltotop'

ReactDOM.render(
    <Router>
      <ScrollToTop/>
            <App />
    </Router>,
  document.getElementById('root')
);

