import React from 'react'
import { useState } from 'react'

const CardTwo = () => {
  
     
const [count, setCount] = useState(0)


  return (


    <div class="items-center flex rounded-2xl bg-gradient-to-r from-green-700 via-violet-700 to-red-700 p-1 shadow-x2 justify-between">
  
  <p>
  
  <a class=" flex">
  

  <img alt="Toy" src={require('../asset/counting.jpg')} class="h-56 w-30 object-contain sm :h-72"/>

  <div class="p-6">
    <strong class="flex bg-yellow-400 px-3 py-1 text-xs font-medium">
    <h3 class="text-xl font-bold text-gray-900">Another Real-time rendering ability of REACT.</h3>
    </strong>

    <button
      type="button"
      class="mt-4 flex w-50 rounded-sm bg-yellow-500 p-4 text-sm font-medium" onClick={()=>setCount(count=>count + 1)}>
      COUNT UP
    </button>
    <h3 class="text-xl font-bold text-gray-900">You have counted {count} times.</h3>
    <button
      type="button"
      class="mt-4 flex w-50 rounded-sm bg-yellow-500 p-4 text-sm font-medium" onClick={()=>setCount(count=>count - 1)}>
      COUNT DOWN
    </button>
    

    <p class=" flex  text-gray-300 font-bold justify-center"> This was made with a React Hook called useState. This hook renders
    current state or value realtime as it changes.
    

</p>
  </div>
</a>
</p>

    </div>
  )


    
  
}

export default CardTwo