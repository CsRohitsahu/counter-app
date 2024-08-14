import { MdModeNight } from "react-icons/md";
import { BsBrightnessHigh } from "react-icons/bs";
import {memo} from 'react'


 function Navbar({mode,setMode}) {
   
  
  

    
  return (
    
    <div className=' flex justify-between p-4  k w-full ' style={{ backgroundColor: mode ? 'rgb(53, 47, 47)' : 'rgb(180, 178, 178)', color: mode ? 'white' : 'black' }}>
      <div ><img src="../public/counter app.jpg" alt="" className="w-10" /></div>
      <div className="cursor-pointer">{mode ? <BsBrightnessHigh onClick={()=>setMode(val=>!val)} /> : <MdModeNight onClick={()=>setMode(val=>!val)} />}</div>
     
    </div>
  )
}
export default memo(Navbar);
