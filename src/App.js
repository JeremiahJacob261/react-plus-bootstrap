import React from "react";
import "./style.css";
import Home from './components/Home.js'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Academy from './components/Academy.js'
import Contact from './components/Contact.js'
import Portfolio from './components/MyPortfolio.js'
import Products from './components/Products.js'
import Header from './components/header.js';
import Footer from './components/footer.js';
import AdminHome from './admin/Admin';

export default function App() {
  return (
        <div>
          <Header />
      <Routes>
    <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Academy" element={<Academy/>}></Route>
          <Route exact path="/Portfolio" element={<Portfolio
           />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Products" element={<Products />}></Route>
          <Route exact path="/admin" element={<AdminHome />}></Route>
        </Routes>
        <Footer/>
        </div>
  );
}