import { React } from 'react'
import Data from '../../components/data/Datamobile'
import Homecard from '../homesection/Homecard'




function Mobilecard() {

    return (
        <>
            <div className='flex flex-1 ml-40'>
                Popluar Searchs :  <p className='text-gray-400'> swift - scarpio - alto - innova - fortuuner - honda city - bolero - wagon r - bmw - omni - thar</p>
            </div>
            <Homecard />
            {Data.map((as) => (
                <div key={as.id} className='mt-10 ml-4  '>
                    <div className='w-70 h-90 bg-gray-400 rounded-3xl dark:bg-gray-300'>
                        <div className='w-40 h-40 justify-self-center'>
                            <img className="rounded-full mt-5" src={as.image} alt="" /></div>
                        <div>
                            <h1 className='text-2xl text-center bg-blue-400'>{as.title}</h1>
                            <p className='mt-2 text-center gap-4'>{as.category}    {as.price}</p>
                            <div className='flex gap-50 ml-5 mt-5'>
                                <p>{as.rating}</p>
                                <p>{as.stock}</p>
                            </div>
                        </div>
                        <button className='bg-amber-200 border-2 border-red-400 p-1 m-4  ml-24  hover:bg-sky-400 rounded-3xl '> See More</button>
                    </div>
                </div>

            ))}
        </>
    );
};
export default Mobilecard;