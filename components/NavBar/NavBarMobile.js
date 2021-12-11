import Link from 'next/link'
import { useState } from 'react'

import {
    HomeIcon,
    UserCircleIcon,
    MailIcon,
    InformationCircleIcon
} from '@heroicons/react/outline'

function NavBarMobile() {
    const [navbar, setNavbar] = useState(true)

    const visibleNavbar = () => {
        if (window.scrollY >= 20) {
            setNavbar(false)
        } else {
            setNavbar(true)
        }
    }


    if (typeof window !== 'undefined') {
        // You now have access to `window`
        window.addEventListener('scroll', visibleNavbar)  
    }
    

    return (
        <div className={navbar ? 'container' : 'hidden'}> 
        <nav className="navbar-mobile w-full flex space-x-7 items-center justify-center text-xs">
            <Link href='/' className='items-center' >
                <a className='flex flex-col text-white items-center '>
                    <HomeIcon  className="h-11 text-white" />
                    <span>Главная</span>
                </a>
            </Link>
            <Link href='/' className='items-center '>
                <a className='flex flex-col text-white items-center '>
                    <MailIcon className="h-11 text-white" />
                    <span>Обратная связь</span>
                </a>
            </Link>
            <Link href='/' className='items-center'>
                <a className='flex flex-col text-white items-center '>
                    <InformationCircleIcon className="h-11 text-white" />
                    <span>О нас</span>
                </a>
            </Link>
            <Link href='/' className='items-center'>
                <a className='flex flex-col text-white items-center '>
                    <UserCircleIcon className="h-11 text-white" />
                    <span>Войти</span>
                </a>
            </Link>
        </nav>
        </div>
    )
}

export default NavBarMobile
