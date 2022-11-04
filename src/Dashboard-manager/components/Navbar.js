import React from 'react'
import { isAuth } from '../../Helper/helper'

const Navbar = () => {
    return (
        <nav className='bg-[#04d1b2] h-[5rem] border-gray-200  px-2 py-2.5'>
            <div className='container flex mx-auto'>
                <div className='flex justify-end pr-4 pt-4 ml-6'>
                     <h1 className='font-semibold text-2xl text-white'>Welcome {isAuth().firstName},</h1>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
