import { useState } from 'react'

import Navbar from './widgets/navbar/Navbar'
import Navbar2 from './widgets/navbar/Navbar2'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beds from './pages/Beds';
import Cars from './pages/Cars';
import Mobile from './pages/Mobile';
import Forsale from './pages/Forsale';
import Forrent from './pages/Forrent';


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
      <Route path='/' element={<Beds />}/>
      <Route path='/Cars' element={<Cars />}/>
       <Route path='/Mobile' element={<Mobile />}/>
        <Route path='/Forsale' element={<Forsale />}/>
         <Route path='/Forrent' element={<Forrent />}/>

     </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
