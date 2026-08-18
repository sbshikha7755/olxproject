import {React, useState} from 'react'
import Homecard from '../homesection/Homecard';
import { Link } from "react-router-dom";



function Car(){



    return(
        <>
       <div className='flex flex-1 ml-40'>
            Popluar Searchs :  <p className='text-gray-400'> swift - scarpio - alto - innova - fortuuner - honda city - bolero - wagon r - bmw - omni - thar</p>
       </div>
       <Homecard/>
       <h1 className='ml-40 text-gray-400'>Home</h1>
       <h1 className='ml-40 text-3xl font-bold'>311373 USed Cars in Indida-Buy Second Hand Cars</h1>
       <p className='ml-40 font-extralight mt-10 '>Looking for a reliable second-hand car in India? You are in the right place. We currently have a wide range of 311125 used cars listed, perfect for every budget and need.....<Link to="/readcar"className=" inline-block text-blue-600">Read more</Link></p>
         
        </>
    );
};
export default Car
