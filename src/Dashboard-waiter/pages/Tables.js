import { useState, useEffect } from 'react'
import axios from 'axios'
import { getCookie } from '../../Helper/helper';
import { Link } from 'react-router-dom';



const Tables = () => {

    const [Table, setTable] = useState();

    const GetTable = async () => {
        return axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/api/GetTable`,
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            }
        })
    }
    useEffect(() => {
        GetTable()
            .then((res) => {
                let data = res.data.customerTable;
                setTable((prevState) => {
                    return { ...prevState, data }
                })
            })
            .catch((e) => console.log(e));
    }, [])


    return (
        <div class="flex-1 pb-6 max-w-6xl md:max-w-6xl mx-auto p-1 mt-6 mb-[40rem]">
            <h1 className="font-semibold text-2xl mb-1 ml-2">Manage Tables</h1>
            <h1 className="font-semibold text-gray-400 ml-2 mb-3 text-1xl"></h1>
            <ul class="grid grid-cols-5 gap-6 mt-6">
            {       
                    Table?.data?.map((ele) => {
                        return (
                            <li key={ele.id}>
                                <Link to={`../table/${ele.id}`}  state={{name:`${ele.Name}`}} class="block p-5 h-[10.5rem] max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <h5 class="mb-2 text-2xl mt-2 text-center font-bold tracking-tight text-gray-900 dark:text-white">Table {ele.Name}</h5>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="US">Reserved</option>
                                        <option value="CA">Vacant</option>
                                        <option value="CA">Occupied</option>
                                    </select>
                                </Link>
                            </li>
                        )
                    })
                }
               
            </ul>
        </div>
    )
}

export default Tables;