
import './App.css'
import { useState } from 'react'
function App() {
 useState();
 let[counter,setCount]=useState(0);
 const changeCounter = ()=>{
 setCount(counter+1);}
  
 return (
  <>
  <button onClick={changeCounter}>Hanan Issa {counter}</button>
  </>
 );
}

export default App

