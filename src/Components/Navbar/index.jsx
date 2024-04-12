import React, { useState } from 'react'
import {Menu, Search, X} from 'react-feather'
import { NavLink, Outlet } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
  return (
    <>
        
            <nav className='bg-[#171717] h-28 fixed top-0 z-20 w-full'>
                <div className='text-white flex justify-between items-center text-4xl py-8 block text-center sm:flex md:flex lg:hidden '>
                    <div className='px-16 py-2'>My Idol</div>
                    <div className='mr-4'>
                        <button onClick={ToggleSidebar}>
                            <Menu/>
                        </button>
                    </div>
                </div>
                <div className='text-lg text-white flex items-center hidden sm:hidden md:hidden lg:flex'>
                        <NavLink to='' className='py-1 mx-12 my-8 hover:underline  hover:underline-offset-8'>Home</NavLink>
                        <NavLink to='biography-page' className='py-1 mx-12 my-8  hover:underline  hover:underline-offset-8'>Biography</NavLink>
                        <NavLink to='fun-facts' className='py-1 mx-12 my-8  hover:underline  hover:underline-offset-8'>Fun Facts</NavLink>
                </div>
                <div className={`sidebar bg-[#171717] ${isOpen == true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0 text-white"></h4>
                            <div className="btn " onClick={ToggleSidebar}><X color='white'/> </div>
                        </div>
                        <div className="sd-body">
                            <div className='text-lg text-white   flex flex-col'>
                                    <NavLink to='' className='py-1 mx-12 my-8 hover:underline  hover:underline-offset-8'>Home</NavLink>
                                    <NavLink to='biography-page' className='py-1 mx-12 my-8  hover:underline  hover:underline-offset-8'>Biography</NavLink>
                                    <NavLink to='fun-facts' className='py-1 mx-12 my-8  hover:underline  hover:underline-offset-8'>Fun Facts</NavLink>                                   
                            </div>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>

            </nav>
        <div>
            <Outlet/>
        </div>
    </>
  )
}

export default Navbar