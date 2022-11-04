import { useState, useEffect } from 'react'
import axios from 'axios'
import { getCookie } from '../../Helper/helper'
import { data } from 'autoprefixer';


const Tables = () => {
    const [Table, setTable] = useState();
    const [Flag, setFlag] = useState(false);

    const createTable = async () => {
        
        let TableCount = Table?.data.length;
        console.log(TableCount);

        await axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}/api/AddTable`,
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            }
        })
        Flag ? setFlag(false) : setFlag(true)
        setTable((prevState) => {
            return { ...prevState }
        })
    }
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
    }, [Flag])


    const DeleteTable = (id) => {
        axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API}/api/DeleteTable`,
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            },
            data : {
                  id,
            }
        }).then(() => Flag ? setFlag(false) : setFlag(true))
          .catch(() => Flag ? setFlag(false) : setFlag(true));
    }

    return (
        <div class="flex-1 pb-6 max-w-6xl md:max-w-6xl mx-auto p-1 mt-6 mb-[25rem]">
            <h1 className="font-semibold text-2xl mb-1 ml-2">Manage Tables</h1>
            <h1 className="font-semibold text-gray-400 ml-2 mb-3 text-1xl"></h1>
            <ul class="grid grid-cols-5 gap-6 mt-6">
                <li>
                    <button onClick={createTable} class="block w-[13rem] p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{ border: "2px solid grey", borderStyle: "dashed" }}>
                        <h5 class="mb-2 text-6xl text-center font-bold tracking-tight text-gray-900 dark:text-white">+</h5>
                    </button>
                </li>
                {
                    Table?.data?.map((ele) => {
                        return (
                            <li key={ele.id}>
                                <button value={ele.id} onClick={() => DeleteTable(ele.id)} type="button" class="m-4 float-right text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                                <a href="#" class="block p-5 h-[10.5rem] max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <h5 class="mb-2 text-2xl mt-2 text-center font-bold tracking-tight text-gray-900 dark:text-white">{ele.Name}</h5>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="US">Reserved</option>
                                        <option value="CA">Vacant</option>
                                        <option value="CA">Occupied</option>
                                    </select>
                                </a>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Tables;