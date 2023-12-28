import React from 'react'
import {Link} from "react-router-dom"

const OrderButton = ({ url, children, name, key }) => (
    <a href={url} >
    <button className="bg-white  hover:bg-orange-500 hover:text-white text-orange-500 border-4 font-bold py-2 px-4 rounded-full border-orange-500/100 mb-2 mr-1  transition ease-in-out duration-300">     
        {children}
        {name}
    </button>
    </a>
  );

export default OrderButton