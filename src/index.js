import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import './index.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='main-container'>
       <App />
    <Navbar/>
    <Header/>
    </div>
   
  </React.StrictMode>
);
