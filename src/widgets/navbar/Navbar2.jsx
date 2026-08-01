import {React} from 'react';
import './Navbar2.css'


function Navbar2(){
    return(
        <>
       <div className='navbar-wapper'>
            <div className="navbar">
           <div className='para'> <p>OLX</p></div>
            <ul className='linkk'>
                <li><a href="/">Home</a></li>
                <li><a href="/buyshell">Buy/Shell</a></li>
                <li><a href="/items">Items</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            </div>
          </div>
        </>
    );
};
export default Navbar2;