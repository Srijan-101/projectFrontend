import { useEffect, useState } from "react";
import axios from 'axios'
import { isAuth, getCookie } from "../../../Helper/helper";
import { Link } from "react-router-dom";


const OutletInformation = ({ values, onChange, setMessage, setLoading, loading, setValues }) => {

    const [outlet, setOutlet] = useState([]);
    const getOutlet = async () => {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/api/GetOutlet`,
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
                let dataOutlet = res.data;
                setOutlet((preState) => {
                    return { ...preState, dataOutlet }
                })
            })
            .catch(e => console.log(e));
    }, [])

    return (
        <>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Outlets
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Manage outlets</p>
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Outlet name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Location
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Manager
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Phone no
                            </th>
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">View</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            outlet?.dataOutlet?.map((ele) => {
                                return (
                                    <tr key={ele.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {ele.outletName}
                                        </th>
                                        <td className="py-4 px-5">
                                            {ele.location}
                                        </td>

                                         <td scope="row" className="flex items-center py-4 px-5 text-gray-900 whitespace-nowrap dark:text-white">
                                            <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                                            <div className="pl-3">
                                                <div className="text-base font-semibold">{ele.Worker[0].firstName} {ele.Worker[0].lastName}</div>
                                                <div className="font-normal text-gray-500">{ele.Worker[0].email}</div>
                                            </div>
                                        </td> 

                                        <td className="py-4 px-5">
                                            {ele.phone}
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <Link href="" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to={{
                                                 pathname : `../viewOutlet/${ele.id}`,
                                                 
                                            }} relative="path">View</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>

        </>
    )
}

export default OutletInformation;