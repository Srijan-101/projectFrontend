import React from 'react'
import { isAuth, getCookie } from '../../Helper/helper'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MenuTable from "./Components/MenuTable";
const Home = () => {

    const [outlet, setOutlet] = useState([]);
    const getOutlet = async () => {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/api/GetOutletbyId/${isAuth().outletId}`,
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            },
        })
    }

    useEffect(() => {
        getOutlet()
            .then(res => {
                let dataOutlet = res.data;
                setOutlet((preState) => {
                    return { ...preState, dataOutlet }
                })
                console.log(outlet);
            })
            .catch(e => console.log(e));

    }, [])
    return (
        <>
            <div class="flex-1 max-w-5xl md:max-w-5xl mx-6 p-1 mt-5 mb-[20rem]">
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="min-w-0 flex-1">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Shankhamul outlet</h2>
                        <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                            <div class="mt-2 flex items-center text-sm text-gray-500">
                                <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
                                </svg>
                                Shankhamul,Lalitpur
                            </div>
                            <div class="mt-2 flex items-center text-sm text-gray-500">
                                <div class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese image" />
                                    <div class="pl-3">

                                        <div class="text-base font-semibold">{isAuth().firstName} {isAuth().lastName}</div>
                                        <div class="font-normal text-gray-500">{isAuth().email}</div>

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <hr />
                <div class="flex-1 max-w-6xl md:max-w-6xl mx-auto p-1 mt-6">
                    <ul class="grid grid-cols-1">
                        <li className='w-full mt-[-2rem] '>
                            <div class="flex-1 max-w-6xl md:max-w-6xl mx-auto p-1 mt-3">
                                <h1 className="font-semibold text-2xl mb-1 ml-2">Menu</h1>
                            </div>
                            <MenuTable className="mt-4" />
                        </li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default Home;