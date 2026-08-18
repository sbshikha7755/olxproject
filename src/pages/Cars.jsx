import {React} from 'react'
import Car from '../components/carsection/Car'
import Cardcar from '../components/carsection/cardata/Cardcar'

function Cars(){
    return(
        <>
        <main>
            <Car/>
            <div className=' grid grid-cols-3 gap-1 px-5'>
                <Cardcar/>
            </div>
        </main>
        </>
    );
};
export default Cars;