import { useState } from 'react'

import Navbar from './widgets/navbar/Navbar'
import Navbar2 from './widgets/navbar/Navbar2'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Buyshell from './pages/Buyshell';
import Items from './pages/Items';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


import './App.css'


function App() {
 

  return (
    <>
{/*      
     <Navbar />
     <Navbar2/> */}
     <BrowserRouter>
      <Navbar />
     <Navbar2/>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/buyshell' element={<Buyshell />}/>
       <Route path='/items' element={< Items />}/>
        <Route path='/blog' element={<Blog />}/>
         <Route path='/contact' element={<Contact />}/>

     </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
