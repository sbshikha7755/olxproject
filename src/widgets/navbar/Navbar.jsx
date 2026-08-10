import { React } from 'react';
import Olxlogo from '../../assets/olxlogo.jpg'
import Find from '../../assets/find.jpg'
import Search from '../../assets/search.jpg'
import { Heart } from 'lucide-react'
import { UserRound } from 'lucide-react'
import {Plus} from 'lucide-react'
 

function Navbar() {
  return (
    <>
        <div className='bg-blue-200 w-full h-14 flex '>
        <div className='w-14 mt-2 '><img className='rounded-full object-cover ml-5  ' src={Olxlogo} alt={Olxlogo} /></div>

        <form className='ml-20 mt-2' >
          <div className='relative flex  gap-10 '>
            <img className='absolute left-40 top-1/2 -translate-y-1/2 w-5 h-5' src={Find} alt={Find} />
            <label htmlFor="">
              <input type="text" placeholder='India' className='border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500' />
            </label>

            <img className='absolute left-11/12 top-1/2 -translate-y-1/2 w-5 h-5' src={Search} alt={Search} />
            <label htmlFor="">
              <input type="text" placeholder='Search' className='border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500' />
            </label>
          </div>
        </form>
        <div className='ml-96 flex mt-2'>
          <p> <Heart className='ml-4' />Whilelist</p>
          <p className='ml-8'> <UserRound className='ml-2' />Login</p>
          <div className=''><button className='border-4 w-32 rounded-b-full rounded-t-full font-bold size-10 text-2xl flex ml-60 border-t-amber-300 border-b-emerald-500 border-l-fuchsia-600 border-r-orange-400'><Plus size={32} color="#080808" strokeWidth={3} className='ml-5' /><p className='font-medium text-blue-700'>Sell</p></button></div>
        </div>

      </div>
 



    </>
  );
};

export default Navbar;