import React from 'react'
import Heading from './heading'
import contact from '../json/contact.json'

const StoreLocation = () => {
  return (
    <div className=''>
        <Heading name={"Find Us Here"} />
        <div className='text-center pb-2'>
        <span className='text-white text-lg '> {contact.address}</span>
        </div>
        <div className='flex justify-center items-center'>
        <iframe 
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.2704966984643!2d-79.42113982407652!3d43.66334387110161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35e22ec7273b%3A0x646b5b8eecbabe86!2sLamhan%20Banh%20Mi!5e0!3m2!1sen!2sca!4v1686118599646!5m2!1sen!2sca'
        width={300}
        height={300}
        title='Location'
        className='border-4 border-solid border-orange-700'
        />
        
        
        </div>
        
       
    </div>
  )
}

export default StoreLocation