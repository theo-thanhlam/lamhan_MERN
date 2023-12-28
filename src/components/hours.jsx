import React from 'react'
import Heading from './heading'
import hours from '../json/hours.json'
import contact from '../json/contact.json'
const Hours = () => {
    const days =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    const operationTimeList = days.map(day => {
        const {open, close } =hours[day];
        return (
            <li key={day} className='mb-3 text-center'>
                <span className='text-white text-lg'>
                {day} : {open} - {close}
                </span>
            </li>
        )
        
    })
    return (
    <div>
        <Heading name={"Hours"}/>
        <ul className=''>
            {operationTimeList}
        </ul>
        <Heading name={"Contact"}/>
        <ul className='text-center text-white text-lg '>
            <li className='mb-3'>Phone: {contact.phone}</li>
            <li className='mb-3'>Email: {contact.email}</li>
        </ul>


    </div>
  )
}

export default Hours