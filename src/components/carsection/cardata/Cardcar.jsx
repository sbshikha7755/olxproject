import { React } from 'react'
import Datacar from './Datacar';


function Cardcar() {
    return (
        <>
            {Datacar.map((ok) => (
                
                    <div key={ok.id} className='mt-5 ml-24 justify-self-center   '>
                    <div className='w-70 h-90 bg-amber-200 rounded-3xl dark:bg-gray-300  shadow-md transition-all duration-300  hover:-translate-y-2 hover:shadow-2xl  hover:bg-gray-200'>
                        <div className='w-40 h-40 justify-self-center overflow-hidden rounded-full '>
                            <img className="w-full h-full object-cover rounded-full transition duration-500 hover:scale-110" src={ok.image} alt="" /></div>
                        <div>
                            <h1 className='text-2xl text-center bg-emerald-300'>{ok.name}</h1>
                            <p className=' text-center gap-5 '>{ok.location}{ok.date}</p>
                            {/* <p className='mt-4 text-center'>{shi.price}</p> */}
                            <div className='flex gap-10 ml-10 mt-5'>
                                <p>{ok.price}</p>
                                <p>{ok.km}</p>
                            </div>
                        </div>
                        <button className='bg-amber-200 border-2 border-red-400 p-1 m-4  ml-24  hover:bg-sky-400 rounded-3xl '> See More</button>
                    </div>
                </div>
               

            ))}
        </>
    );
};
export default Cardcar;