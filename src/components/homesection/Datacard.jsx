import { React } from 'react'
import Data from '../../components/data/Datamobile';


function Datacard() {

    return (
        <>
            {Data.map((as) => (
                 <div key={as.id} className='mt-10 ml-4  '>
                    <div className='w-70 h-90 bg-gray-400 rounded-3xl dark:bg-gray-300'>
                        <div className='w-40 h-40 justify-self-center'>
                            <img className="rounded-full mt-5" src={as.image} alt="" /></div>
                        <div>
                            <h1 className='text-2xl text-center bg-blue-400'>{as.title}</h1>
                            <p className='mt-2 text-center gap-4'>{as.category}    {as.price}</p>
                            {/* <p className='mt-4 text-center'>{shi.price}</p> */}
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
export default Datacard;