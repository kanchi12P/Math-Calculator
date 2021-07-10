import Graph from "./Graph.jsx";
import Input from "./Input";
import {useState} from "react";
function App(){
  const[graphplot,setGraph]=useState("x");
  function graphProp(funct) {
     setGraph(funct);
     console.log(graphplot);
  }
  return(<div >
  <div className="sidebar"><Input plot={graphProp}></Input></div>
  <div className="content-1"><Graph graphToPlot={graphplot}/></div>
  </div>);
}


export default App; 
