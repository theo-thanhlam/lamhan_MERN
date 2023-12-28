import React from 'react'
import OrderButton from './orderButton'


const platforms = [
    {url:"https://www.foodbooking.com/ordering/restaurant/menu?company_uid=5248587b-48ec-4ab1-8621-25d81693f8ee&restaurant_uid=2803ea39-fbd9-4d92-953a-37f1b0ae9671&facebook=true", name:"PICKUP ORDER OR CATERING",key:"Pickup"},
    {url:"https://www.ubereats.com/ca/store/lamhan-banh-mi/f3IoOGGzRaaNlDXgF9qkoA", name:"ORDER UBEREATS",key:"UberEat"},
    {url:"https://www.doordash.com/store/lamhan-toronto-2294823/", name:"ORDER DOORDASH",key:"DoorDash"},
    {url:"https://ritual.co/order/lamhan-banh-mi-bloor-christie-toronto/0b25", name:"ORDER RITUALS",key:"Ritual"},
    
]

const OrderButtonList = () => {
    const orderButtonList = platforms.map(platform => {
        return <li key={platform.key}><OrderButton url={platform.url} name={platform.name}/> </li>
});
    
  return (
    <ul className='items-center text-center'>
       {orderButtonList}
    </ul>
  )
}

export default OrderButtonList