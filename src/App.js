import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Items from "./Items";

function App() {
  const[List,setList]=useState([]);
  const [item,setitem]=useState("");
  const handleInput=()=>{
    setList((olditems)=>{
      return [...olditems,item];
    });
    setitem("")

  }
  const deleteItems=(id)=>{
    setList((olditems)=>{
      return olditems.filter((listitems,index)=>{
          return index != id;
      })
    })
  }
 

  return (
    <>
      <div className="App">
        <h2 className="bg-purple-600 text-white text-center max-w-2xl font-mono shadow-xl text-5xl font-medium m-auto mt-5 mb-5 p-5 border-gray-400 rounded-lg">
          My Todo List:
        </h2>

        <div className="flex justify-center">
          <div className="space-x-5">
            <input
              placeholder="Enter Your List"
              className="pl-2 p-2 border-2 border-purple-500 rounded-lg w-64"
              type="text"
              value={item}
              onChange={(e)=>setitem(e.target.value)}
            ></input>
            <button
              className="hover:bg-gray-50 hover:text-purple-800 bg-pink-500 rounded-md text-white px-5 text-xl py-1"
              type="submit"
              name="action"
              onClick={handleInput}
            >
              Add
            </button>
          </div>
        </div>
        {List.map((pd,idx)=>{
          
          return(
            <Items name={pd} key={idx} id={idx} onSelect={deleteItems}/>
          )
        })}
       
      </div>
    </>
  );
}

export default App;
