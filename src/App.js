import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Categories from './components/Categories'
import Signin from './Header/Signin';
import Signup from './Header/Signup';
import Footer from './components/Footer';
import ContactUs from './Header/Contact';
import SavedArticles from './components/SavedArticles';

export default class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "" }}>
        <BrowserRouter>
          <Navbar  />
          <div className="row " style={{ position: "sticky", top: "0", zIndex: "1000",borderRadius:"20px" }}>
              <div className="col d-flex justify-content-center" style={{ position: "sticky", top: "0", zIndex: "1000",borderRadius:"20px" }} >
                 <Categories/>
              </div>
          </div>
          
          <Routes>
            <Route path="/" element={<News  pageSize={9}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/Aboutus" element={<Aboutus/>}/>
            <Route path="/Signin" element={<Signin/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Contact" element={<ContactUs/>}/>
            <Route path="/Footer" element={<Footer/>}/>
            <Route path="/SavedArticles" element={<SavedArticles/>}/>
          </Routes>
          
        </BrowserRouter>
      </div>
    );
  }
}
