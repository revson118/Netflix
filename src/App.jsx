import React from "react";
import {add,mult,sub,div} from "./Cal";

function App(){
  return(
    <>
        <ul>
            <li>sum of two no is {add(30,3)}</li>
            <li>Sub of two no is {sub(30,3)}</li>
            <li>Div of two no is {div(40,3)}</li>
            <li>Mult of two no is {mult(30,3)}</li>

        </ul>
    </>
  );
}

export default App;