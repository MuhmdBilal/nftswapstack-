import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import CSS here
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={3000} />
  </React.StrictMode>,
  document.getElementById('root')
);