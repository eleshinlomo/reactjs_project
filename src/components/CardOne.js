import React from "react"
import { useState } from "react"


const CardOne = () => {
const [purchase, setPurchase] = useState(0)


  return (


      <div class="items-center flex rounded-2xl bg-gradient-to-r from-yellow-500 via-green-900 to-blue-900 p-1 shadow-x2 justify-between">
    
    <p>
    
    <a class=" flex">
    
    <img alt="Horse" src={require('../asset/horse.png')} class="h-56 w-50 object-contain sm :h-72"/>
  
    <div class="p-5">
      <strong class="flex bg-yellow-400 px-3 py-1 text-xs font-medium">
      <h3 class="text-xl font-bold text-gray-900"> Real-time rendering of REACT. This makes it a suitable tool for making ecommerce websites.</h3>
      </strong>

      <h3 class="text-xl font-bold text-gray-900">Item Name: Horse</h3>
      <h3 class="text-xl font-bold text-gray-900">Price: $10</h3>
  
      <button
        type="button"
        class="mt-4 flex w-50 rounded-sm bg-yellow-500 p-4 text-sm font-medium" onClick={()=>setPurchase(purchase=>purchase + 1)}>
        ADD ITEM
      </button>
      <h3 class="text-xl font-bold text-gray-900">You have  {purchase} items in your Basket. Your Total Purchase is ${purchase * 10}.</h3>
      
      
  
      <p class=" flex  text-gray-300 font-bold justify-center"> This was made with a React Hook called useState. This hook renders
      current state or value realtime as it changes.
      
  
  </p>
    </div>
  </a>
  </p>
  
      </div>
    )
  
  
      
    
  }
  


export default CardOne