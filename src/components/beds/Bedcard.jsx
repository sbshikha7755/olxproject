import { React } from 'react';
import Beddata from './Beddata'

function Bedcard() {
    return (
        <>
            {Beddata.map((bed) => (
                <div key={bed.id} className='mt-10 ml-4  '>
                    <div className='w-70 h-90 bg-amber-400 rounded-3xl dark:bg-gray-300  shadow-md transition-all duration-300  hover:-translate-y-2 hover:shadow-2xl  hover:bg-gray-200'>
                        <div className='w-40 h-40 justify-self-center overflow-hidden rounded-full'>
                            <img className="w-full h-full object-cover rounded-full transition duration-500 hover:scale-110" src={bed.image} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl text-center bg-blue-400'>{bed.name}</h1>
                            <p className='mt-2 text-center gap-10'>{bed.location}        {bed.price}</p>
                        </div>

                    </div>
                </div>

            ))}



        </>
    );
};
export default Bedcard;