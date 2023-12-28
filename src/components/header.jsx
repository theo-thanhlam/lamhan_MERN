import React, {useState} from 'react'
import logo from "../images/lamhan-logo.png"
import {Popover} from '@headlessui/react'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
        <nav className='text-center'>
            This is navbar
        </nav>
    </header>
  )
}

export default Header