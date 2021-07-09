import Graph from "./Graph.jsx";
import Input from "./Input";
import {useState} from "react";
function App(){
  const[graphplot,setGraph]=useState("x");
  function graphProp(funct) {
     setGraph(funct);
     console.log(graphplot);
  }
  return(<div><Input plot={graphProp}></Input><Graph graphToPlot={graphplot}/></div>);
}


export default App; 
