
import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Work from './Component/Work';
import Team from './Component/Team';
import Plan from './Component/Plan';
import Subscribe from './Component/Subscribe';
import Contact from './Component/Contact';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/' element={<Navbar />}></Route>
          <Route path='/' element={<Work />}></Route>
          <Route path='/' element={<Team />}></Route>
          <Route path='/' element={<Plan />}></Route>
          <Route path='/' element={<Subscribe />}></Route>
          <Route path='/' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>





    </div>
  );
}

export default App;
