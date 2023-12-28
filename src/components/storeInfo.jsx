import React from 'react'
import Heading from './heading'
import Hours from './hours'
const StoreInfo = () => {
  return (
    <div className='container mx-auto'> 
    
        <div className='flex flex-col md:flex-row gap-4'>
        
           <Hours className='col-span-3'/>
            <div>2</div>
            <div>3</div>
        </div>
    </div>
  )
}

export default StoreInfo