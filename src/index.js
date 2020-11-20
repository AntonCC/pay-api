import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { WidthProvider } from './contexts/widthContext'

ReactDOM.render(
  <Router basename='/payapi'>
    <React.StrictMode>
      <WidthProvider>
        <App />
      </WidthProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

