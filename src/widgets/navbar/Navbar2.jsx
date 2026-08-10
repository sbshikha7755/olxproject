import {React} from 'react';
import './Navbar2.css'


function Navbar2(){
    return(
        <>
       <div className='navbar-wapper'>
            <div className="navbar">
             <div><button className='border-2 bg-blue-400 w-60 rounded-b-full rounded-t-full font-bold size-10 text-2xl'>ALL CATEGROIES</button></div>
            <ul className='linkk'>
                <li><a href="/">Beds-Wardrobes</a></li>
                <li><a href="/Cars">Cars</a></li>
                <li><a href="/Mobile">Mobile</a></li>
                <li><a href="/Forsale">For Sale:House & Apartment</a></li>
                <li><a href="/Forrent">For Rent:House & Apartment</a></li>
            </ul>
            </div>
          </div>
        </>
    );
};
export default Navbar2;