import { evaluate } from "mathjs";
import { useState } from "react";
import Graph from "./Graph";


function Input(props){
    const [graph,setGraph]=useState("");
    const [exp, setExp]=useState("");
    function graphChange(event){
        setGraph(document.querySelector("input").value);
        
    }
const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;


    function transfer(event){
    
        event.preventDefault();
        props.plot(graph);
        setGraph("");
        setExp(graph);
        
    }
    
    return(<form className="form">
    <label>Enter graph: </label>
    <input type="text" name="func" onChange={graphChange} value={graph}></input>
    <input type="submit" value="Plot" onClick={transfer}></input>

    <div> {re.test(exp) ?  <h1>{eval(exp)}</h1> : <h1>function</h1> }</div>

    </form>);

}
    
export default Input;