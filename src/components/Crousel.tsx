import React from "react";
import DataCrousel from "@/data/DataCrousel.json";
import { useState } from "react";

type tipeProps = {
  text: string;
  onClick: React.MouseEventHandler;
  counter: number;
};


function MyButton(prop: tipeProps) {
  return (
    <div>
      <button type="button" onClick={prop.onClick}>
        {prop.text}
      </button>
    </div>
  );
}

export default function Crousel() {
  const [counter, setCounter] = useState(0);

   function int(){
    if(counter<2){
        setCounter(counter + 1)
    }else{
        setCounter(0)
    }
   }
 const timer = setInterval(function() {int()}, 3000);

  function increment() {
    if (counter < 2) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
    return counter;
  }




  function decrement() {
    if (counter < 2) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
    return counter;
  }

  return (
    <div>
        
      <div className="w-[800px] h-[400px] mt-[100px] ml-[100px] mr-[50px]">
        <div
          style={{ backgroundImage: `url(${DataCrousel[counter].url})` }}
          className="w-full h-full rounded-2xl bg-center duration-500 bg-cover"
        >
          <div className=" flex text-white text-5xl justify-between items-center h-[400px]">
            <MyButton text="<" onClick={decrement} counter={counter} />
            <MyButton text=">" onClick={int} counter={counter} />
          </div>
        </div>
      </div>
    </div>
  );
}
