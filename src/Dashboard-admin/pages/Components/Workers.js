import { useState, useEffect } from "react";
import axios from 'axios';
import { isAuth, getCookie } from "../../../Helper/helper";


const Workers = () => {

    const [worker, setWorker] = useState([]);
    const getOutlet = async () => {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/api/GetWorker`,
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            },
            data: {
                email: isAuth().email
            }
        })
    }

    useEffect(() => {
        getOutlet()
            .then(res => {
                let workers = res.data;
                setWorker((preState) => {
                    return { ...preState, workers }
                })
            })
            .catch(e => console.log(e));
    }, [])


    return (
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg mb-[11rem]">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption class="p-5 md:w-[30rem] text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    <form>
                        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                        <div class="relative">
                            <input type="search" id="search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Post
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Outlet
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Phone number
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        worker?.workers?.map((ele) => {
                            console.log(ele);
                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                        <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                                        <div class="pl-3">
                                            <div class="text-base font-semibold">{ele.firstName} {ele.lastName}</div>
                                            <div class="font-normal text-gray-500">{ele.email}</div>
                                        </div>
                                    </td>
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {ele?.Post ? ele?.Post : "Worker"}
                                    </th>
                                    <td class="py-4 px-6">
                                        {ele?.Outlet?.outletName ? ele?.Outlet?.outletName : "-"}
                                    </td>

                                    <td class="py-4 px-6">
                                        {ele.phoneNumber ? ele.phoneNumber  : "-"}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Workers;