 import {React} from 'react'
 import { Smile } from "lucide-react";
 import Homecard from '../components/homesection/Homecard';
 import Bedss from '../components/beds/Bedss'
 import Bedcard from '../components/beds/Bedcard'

 
 function Beds(){
     return(
         <>
         <main>
            <Bedss/>
             <Homecard/>
             <div className='grid grid-cols-4'>
                    <Bedcard/>
                </div>

          
         </main>
         </>
     );
 };
 export default Beds;