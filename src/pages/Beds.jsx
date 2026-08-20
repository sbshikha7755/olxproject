 import {React} from 'react'
 import { Smile } from "lucide-react";
 import Homecard from '../components/homesection/Homecard';
 import Bedss from '../components/beds/Bedss'

 
 function Beds(){
     return(
         <>
         <main>
            <Bedss/>
             <Homecard/>

          
         </main>
         </>
     );
 };
 export default Beds;