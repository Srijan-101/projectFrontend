
import { useState, useEffect } from "react";
import { isAuth, getCookie } from "../../../Helper/helper";
import axios from 'axios'
import MenuModal from "./SubComponents/MenuModal";


const MenuTable = ({Flag,setFlag}) => {
    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false)


    const clicked = (e) => {
        setModalOn(true)
        let a = document.getElementById(e.target.value);
        a.style.display = "block"
    }

    const [menu, setMenu] = useState([]);

    const GetMenu = async () => {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/api/GetMenu`,
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            },
        })
    }

    const onDelete = async (e) => {
        const id = e.target.value
        await axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_API}/api/DeleteMenu`,
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            },
            data: {
                id
            }
        }).then(() => Flag ? setFlag(false) : setFlag(true)
        ).catch(() => Flag ? setFlag(false) : setFlag(true))
    }

    useEffect(() => {
        GetMenu()
            .then(res => {
                let dataMenu = res.data;
                setMenu((preState) => {
                    return { dataMenu }
                })
            })
            .catch(e => console.log(e));
    }, [Flag])


    return (
        <>


            <div class="overflow-x-auto relative shadow-md sm:rounded-lg mb-[5rem]">

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
                                Category
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Manage
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu?.dataMenu?.map((ele) => {
                                return (
                                    <tr key={ele.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {ele.Name}
                                        </th>

                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {ele.Category}
                                        </th>
                                        <td class="py-4 px-6">
                                            {ele.price}
                                        </td>

                                        <td class="py-4 px-6">
                                            <select value={ele.Status} disabled={true} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option value="Available">Available</option>
                                                <option value="Not Available">Not available</option>
                                            </select>
                                        </td>
                                        <td class="py-4 px-6">
                                            <MenuModal id={ele.id} setModalOn={setModalOn} setChoice={setChoice} values={ele}  Flag={Flag} setFlag={setFlag}/>
                                            <button type="submit" class="text-white bg-[#04d1b2] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" value={ele.id} onClick={clicked}>Edit</button>
                                            <button type="submit" class="text-white ml-2 bg-[#f24667] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" value={ele.id} onClick={onDelete}>Delete</button>
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

export default MenuTable;