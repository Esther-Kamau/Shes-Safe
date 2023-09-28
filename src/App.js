import React from 'react';
import Navbar from './components/navbar2'
import Home from './pages/home'
import About from './pages/about'
import Footer from './components/footer'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
   <>
    <Navbar/>
    <Routes>
    <Route path='/' element={< Home/>} />
    <Route path='/about' element={< About />} />
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
