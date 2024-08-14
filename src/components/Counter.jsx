import { useState } from "react";
import { IoMdRefresh } from "react-icons/io";

export default function Counter({mode}) {
const [count, setCount] = useState(0);


function restart(){
    setCount(0);
  
    
}

 


  return (
    <div className="flex flex-col w-full items-center  gap-10 h-[95%] pt-[5rem]" style={{ backgroundColor: mode ? 'rgb(53, 51, 51)' : 'rgb(180, 178, 160)', color: mode ? 'white' : 'black' }}>
      <div className="text-xl">Counter app</div>
      <div className="w-[60%]    flex flex-col justify-center items-center gap-12">
        <div className="text-6xl">{count}</div>
        <div className="flex w-[100%] justify-between items-center border rounded-md">
          <button
            className="text-6xl cursor-pointer   bg-orange-100 w-[100px] rounded-md hover:scale-90 "  disabled={count<=0?true:false} 
            onClick={() => {
              if (count <= 0) setCount(0);
              else setCount(count-1);
              
            
            }}  
          >
            -
          </button>
          <IoMdRefresh className="text-3xl cursor-pointer hover:scale-110" onClick={restart}></IoMdRefresh>
          <button
            className="text-6xl cursor-pointer bg-orange-100 w-[100px] rounded-md hover:scale-90 "
            onClick={() => {
             setCount(count+1);
             
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
