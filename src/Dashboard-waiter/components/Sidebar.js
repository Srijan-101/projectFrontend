import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse,faUtensils} from '@fortawesome/free-solid-svg-icons'


import { BsArrowLeftCircle } from 'react-icons/bs'
import { FaRegSun } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import {TbLogout} from 'react-icons/tb'
import {MdChair} from 'react-icons/md'


const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    const Menus = [
        { title: 'Home', path: '/', src: <FontAwesomeIcon icon={faHouse} />},
        { title: 'Menu', path: '/menu',  src: <FontAwesomeIcon icon={faUtensils} />},
        {title: 'Tables' , path:'/tables',src: <MdChair/>},
        { title: 'Settings', path: '/Settings', src: <FaRegSun />},
        { title: 'Logout', path: '/signout', src: <TbLogout />},
    ]

    return (
        <>
            <div
                className={`${
                    open ? 'w-60  transition-all' : 'w-fit'
                }  sm:block  relative h-auto bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 `}
            >
                <BsArrowLeftCircle
                    className={`${
                        !open && 'rotate-180'
                    } absolute  text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-medium rounded-lg cursor-pointer text-black 
                        ${menu.gap ? 'mt-9' : 'mt-1'} ${
                                    location.pathname === menu.path &&
                                    'bg-[#04d1b2] text-white'
                                }`}
                            >
                                <span className='text-xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300  hover:block ml-[1px]`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
