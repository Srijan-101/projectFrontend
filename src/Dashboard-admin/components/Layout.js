import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useEffect } from 'react'
import { isAuth } from '../../Helper/helper'

const Layout = ({ children }) => {
    
    return (
        <>
            <div className='flex flex-auto'>
                <Sidebar/>
                <div className='grow'>
                    <Navbar />
                    <div>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout
