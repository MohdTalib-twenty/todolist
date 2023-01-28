import React from "react";

export default function Items(props) {
   
  return (
    <>
      <div className="bg-indigo-100 text-center mt-5 rounded-xl p-6 w-2/6" style={{"marginLeft" : "auto","marginRight" : "auto","marginTop" : "50px"}}>
        <div className="flex justify-between space-x-5">
          <h5 className="font-sans font-semibold text-lg">{props.name}</h5>
          <button
            onClick={()=>props.onSelect(props.id)}
            className="bg-red-500 text-white font-medium px-2 py-1 rounded-xl hover:bg-red-900"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
