import React from 'react'
import Chart from './Components/SubComponents/Chart/Chart';
import { isAuth, getCookie } from '../../Helper/helper'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {

    const [outlet, setOutlet] = useState([]);
    const [DailySales, SetDailySales] = useState({
        Dailysale: 0
    })

    const getOutlet = async () => {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/api/GetOutletbyId/${isAuth().outletId}`,
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            },
        })
    }

    const getDailySales = async () => {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/api/GetDaily/${isAuth().outletId}`,
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
            })
            .catch(e => console.log(e));

        getDailySales()
            .then(res => {
                SetDailySales({
                    Dailysale: parseFloat(res.data)
                })
            })
            .catch((e) => console.log(e));
    }, [])

    const onDownload =  async () => {
             await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_API}/api/GenerateCSV/${isAuth().outletId}`,
                headers: {
                    'Authorization': 'Bearer ' + getCookie('token')
                },
                responseType : 'blob'
            }).then((res) => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'data.csv'); //or any other extension
                document.body.appendChild(link);
                link.click();
            }) 
    }

    return (
        <>
            <div class="flex-1 max-w-5xl md:max-w-5xl mx-6 p-1 mt-5 mb-[20rem]">
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="min-w-0 flex-1">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{outlet?.dataOutlet?.OutletInformation?.outletName}</h2>
                        <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                            <div class="mt-2 flex items-center text-sm text-gray-500">
                                <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
                                </svg>
                                {outlet?.dataOutlet?.OutletInformation?.location}
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
                    <div class="mt-5 flex lg:mt-0 lg:ml-4 ">
                        <span class="sm:block">
                            <button type="button" onClick={onDownload} class="inline-flex mr-2 items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                                Generate CSV
                            </button>
                        </span>
                    </div>
                </div>
                <hr />

                <div class="flex-1 mt-2 mb-[9rem]">
                    <div class="flex-1 max-w-4xl md:max-w-5xl mx-auto p-1 mt-2">
                        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:gap-20">
                            <li>
                                <Chart />
                            </li>

                            <li class="bg-white rounded-lg shadow-xl h-[16rem] ml-[10rem] w-[20rem]">
                                <div class=" p-5 ">
                                    <p className='text-gray-500 font-bold tracking-wide text-base text-medium'>SALES</p>
                                    <p className='text-gray-500  font-medium text-sm'>Total sales today</p>
                                    <h1 className="text-4xl font-semibold text-center mt-6">NPR {DailySales.Dailysale}</h1>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;