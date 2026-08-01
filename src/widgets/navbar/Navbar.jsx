import { React} from 'react';
import Olxlogo from '../../assets/olxlogo.jpg'
import Find from '../../assets/find.jpg'
import Search from '../../assets/search.jpg'


function Navbar ()  {
  return (
   <>
         <div className='bg-blue-200 w-full h-14 flex'>
         <div className='w-14 '><img className='rounded-full object-cover  ' src={Olxlogo} alt={Olxlogo} /></div>
         
         <form className='ml-20' >
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
         
        </div>
       

   
   </>
  );
};

export default Navbar;