import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

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
