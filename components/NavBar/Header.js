import React, {useState, useEffect} from "react"
import Link from "next/link"

import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from "@heroicons/react/solid"

import Image from "next/image"
import logo from '../../assets/img/lama-logo.svg'


function Header() {
  
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
       
    }



    if (typeof window !== 'undefined') {
        // You now have access to `window`
        window.addEventListener('scroll', changeBackground)  
    }
    
    return (
        <header className={navbar ? 'navbar active' : 'navbar'}>
            <div className="container m-auto flex ">
                {/* Left - Logo */}
                <div className="relative flex  items-center  cursor-pointer ">
                    <Image 
                        src={logo} 
                        height={50}
                        width={50}
                    />
                </div>
                {/* Middle - Navigation */}
                <div className="relative flex items-center  w-3/4   space-x-4 justify-center lg:m-auto lg:w-auto lg:space-x-9">
                    <Link href='/'>
                        <a className='text-white font-bold  '>
                            Главная
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='text-white font-bold '>
                            Обратная связь
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='text-white font-bold'>
                            О нас
                        </a>
                    </Link>
                </div>
                {/* Right - User*/}
                <div className="flex items-center justify-end space-x-5 text-gray-100 text-xs ">
                    
                    <GlobeAltIcon  className='h-8'/>
                    <div className="flex items-center space-x-4 border-2 p-2 rounded-full">
                        <MenuIcon className='h-8' />
                        <UserCircleIcon  className='h-8' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
