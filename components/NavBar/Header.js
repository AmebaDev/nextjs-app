import React, {useState, useEffect} from "react"
import Link from "next/link"

import ButtonLang from '../i18n/ButtonLang'
import UserMenu from '../UserMenu/UserMenu'
 
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
                    <div className="text-white text-4xl mr-1 font-bold mr-14"> React</div>
                    <Image 
                        src={logo} 
                        layout="fill"
                        objectFit="contain"
                        objectPosition="right"
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
                    <ButtonLang />   
                    <UserMenu />
                </div>
            </div>
        </header>
    )
}

export default Header
