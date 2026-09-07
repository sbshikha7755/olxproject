import { useContext } from "react";
import Usecontext from "../components/rentsection/Usecontext";

function Forrent() {
  const data = useContext(Usecontext);

  console.log(data); // check browser console

  return (
    <>
      <h1>Forrent {data?.name}</h1>
      <h2>Age: {data?.age}</h2>
    </>
  );































  
}

export default Forrent;