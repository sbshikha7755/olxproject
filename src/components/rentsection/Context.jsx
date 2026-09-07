import Usecontext from "./Usecontext";
import Data from "./data";
import Forrent from "../../pages/Forrent";

function Context() {
  return (
    <Usecontext.Provider value={Data}>
      <Forrent />
    </Usecontext.Provider>
  );
}

export default Context;