import { useState } from 'react'

import Header from "./Header"
import NavBarMobile from './NavBarMobile'

function NavBar() {

    return (
        <> 
            { typeof window !== 'undefined' 
            ? window.innerWidth <= 800 ? <NavBarMobile /> : <Header /> 
            : null
            }
        </>
    )
}

export default NavBar
