import Navbar from './components/Navbar'
import Counter from './components/Counter'

import { useState } from 'react'


export default function App() {
  const [mode,setMode]=useState(false)
  
 
 return(
  
  <div className=" h-[100vh] flex flex-col  ">
  
    <Navbar mode={mode} setMode={setMode}/>
   <Counter mode={mode}/>
   </div>
   
 )
}

