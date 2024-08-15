import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './components/Aboutus';

export default class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "" }}>
        <BrowserRouter>
          <Navbar  />
          <Routes>
            {/* Default route that loads the News component */}
            <Route path="/" element={<News  pageSize={9}/>} />
            {/* Additional route if needed, currently loads the same News component */}
            <Route path="/news" element={<News />} />
            <Route path="/Aboutus" element={<Aboutus/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
