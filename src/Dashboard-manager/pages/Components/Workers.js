import { useState, useEffect } from "react";
import { isAuth, getCookie } from "../../../Helper/helper";
import axios from 'axios'

const Workers = ({Flag,setFlag}) => {
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

    const onDelete = async (e) => {
        let userId = e.target.value;
        let outletId = isAuth().outletId;

        await axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API}/api/DeleteWorker`,
            data : {
                 userId,
                 outletId
            },
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            },
        }).then(() => {
            Flag ? setFlag(false) : setFlag(true)
            console.log(Flag)
        })
        .catch(() => Flag ? setFlag(false) : setFlag(true))
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
    }, [Flag])


    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption className="p-5 md:w-[30rem] text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    <form>
                        <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                        <div className="relative">
                            <input type="search" id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Post
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Phone number
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Manage
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        outlet?.dataOutlet?.userR?.map((ele,key) => {
                            return (
                                <tr  key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">{ele.firstName} {ele.lastName}</div>
                                            <div className="font-normal text-gray-500">{ele.email}</div>
                                        </div>
                                    </td>
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {ele.Post}
                                    </th>

                                    <td className="py-4 px-6">
                                       {ele.phoneNumber ? ele.phoneNumber  : "-"}
                                    </td>
                                    {
                                        ele.Post === "Manager" ?   null : ( <td className="py-4 px-6">
                                        <button type="submit" value={ele.id} className="text-white ml-2 bg-[#f24667] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={onDelete}>Delete</button>
                                    </td>)
                                    }
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