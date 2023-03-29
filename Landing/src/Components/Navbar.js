import React,{useState} from 'react'

const Navbar = () => {
    const [toggle,setToggle]=useState('hidden lg:visible')
    const [align,setAlign] = useState('flex-row-reverse')
    const[disp,setDisp]=useState(false)
  return (
    <nav class="flex items-center justify-between flex-wrap bg-green-900 lg:px-24">
  <div class="flex items-center flex-shrink-0 text-black md:mr-6 lg:mr-2">
   <a href="/"><span class="font-semibold text-3xl tracking-tight"><img src="logo.png" className="w-24 md:w-44"></img></span></a>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white" onClick={(e)=>{
        if(disp===false){
        setToggle('block lg:visible');setDisp(true);
        setAlign('justify-center items-center')
    }
        else{
         setToggle('hidden lg:visible')
         setAlign('flex-row-reverse')
         setDisp(false);
        }
    }}>
     <img src="hamburg.png"></img>
    </button>
  </div>
  <div class={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${toggle}`}>
    <div class={`text-lg lg:flex-grow flex gap-6 ${align} text-green-100 font-medium lg:px-16`}>
    <span className=''>
      <a href="#timeline" class="inline mt-4 text-2xl lg:mt-0  hover:underline">
      Timeline
      </a>
      </span>
      <span>
      <a href="http://localhost:3000" class="inline mt-4 text-2xl  lg:mt-0  hover:underline">
      Purchase Items
      </a>
      </span>
      <span>
      <a href="#about" class="inline mt-4 text-2xl  lg:mt-0  hover:underline">
      About
      </a>
      </span>
    </div>
   
  </div>
</nav>
  )
}

export default Navbar