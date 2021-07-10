import { useState } from "react";
import Graph from "./Graph";

function Input(props){
    const [graph,setGraph]=useState("");

    function graphChange(event){
        setGraph(document.querySelector("input").value);
        
    }
    function transfer(event){
        event.preventDefault();
        props.plot(graph);
        setGraph("");
    }
    return(<form className="form">
        <label>Enter graph: </label>
   <input type="text" name="func" onChange={graphChange} value={graph}></input>
   <input type="submit" value="Plot" onClick={transfer}></input>
   </form>);

}
export default Input;