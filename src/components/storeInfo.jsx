import React from 'react'
import Hours from './hours'
import StoreLocation from './storeLocation'
const StoreInfo = () => {
  return (
    <div className='container mx-auto'> 
    
        <div className='flex flex-col justify-between  md:flex-row  gap-4 '>
        
           <Hours className='col-span-3'/>
            <img src='https://placehold.co/400' alt='info'></img>
            <StoreLocation />
        </div>
    </div>
  )
}

export default StoreInfo