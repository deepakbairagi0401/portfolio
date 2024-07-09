import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='w-100 d-flex navbar p-3 mx-auto' style={{justifyContent:"space-between",alignItems:"center"}}>
            <div className='mt-1'>
                <NavLink to="/">
                    <img src="./logodb.jpeg" style={{borderRadius:"15px"}}  width={"50px"} alt="" />
                </NavLink>
            </div>
            <div className='w-50'>
                <ul className={showMenu ? "list mobile-menu-link" : "list "} >
                    <NavLink onClick={()=>{setShowMenu(!showMenu)}} to="/"><li>Home</li></NavLink>
                    <NavLink onClick={()=>{setShowMenu(!showMenu)}} to="/about"><li>About Me</li></NavLink>
                    <NavLink onClick={()=>{setShowMenu(!showMenu)}} to="/project"><li>Projects</li></NavLink>
                    <NavLink onClick={()=>{setShowMenu(!showMenu)}} to="/contact"><li>Contact</li></NavLink>
                </ul>
            </div>
            <div className='btnn'>
                <NavLink to="/contact" className='btn btn-primary p-2 rounded-5' style={{width:"175px"}}>LETS'TALK</NavLink>
            </div>
            <div className='hamburger-menu'>
               <button className='btn bg-primary' onClick={()=>{setShowMenu(!showMenu)}} href="">
                <GiHamburgerMenu/>
               </button>
            </div>
        </div>
    )
}

export default NavBar