import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import sdata from "./sdata";
import "./index.css"

function ncard(val) {
   return (
      <Card
         imgsrc={val.imgsrc}
         title={val.title}
         sname={val.sname}
         link={val.links}
      />

   );

}
ReactDOM.render(
   <>
      <h1 className="heading_style">@MyNetflix</h1>

      {sdata.map(ncard)}
   </>,
   document.getElementById('root')


);











// var h1=document.createElement('h1');
// h1.innerHTML="Hrithik Rudra"
// document.getElementById("root").appendChild(h1);
