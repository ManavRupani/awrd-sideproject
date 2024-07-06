import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/about/About';
import Feature from './components/featured/Feature';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import CustomCursor from './CustomCusor';
import './index.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomCursor/>
    <div className='main-container'>
      <App />
      <Navbar/>
      <Header/>
      <Feature/>
      <About/>
      <Gallery/>
    </div>
   
  </React.StrictMode>
);
