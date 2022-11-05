
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '../../../Helper/helper';
import { useParams } from 'react-router-dom';

const OrderedItem = ({ Flag, SetFlag }) => {

    const [item, setItem] = useState([]);
    const params = useParams();

    const GetItem = async () => {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/api/GetOrderItem/${params.id}`,
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            },
        })
    }

    useEffect(() => {
        GetItem()
            .then(res => {
                let dataItem = res.data;
                console.log(dataItem);
                setItem((preState) => {
                    return { dataItem }
                })
            })
            .catch(e => console.log(e));
    }, [Flag])

    const onDelete = async (e) => {
        const id = e.target.value
        
        await axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_API}/api/DeleteItem`,
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            },
            data: {
                id
            }
        }).then(() => Flag ? SetFlag(false) : SetFlag(true)
        ).catch(() => Flag ? SetFlag(false) : SetFlag(true))
    }


    return (
        <div class="flex-1 pb-6 max-w-5xl md:max-w-6xl mx-auto p-1 mt-6">
            <h1 className="font-semibold text-2xl mb-1 ml-2">View Ordered item</h1>
            <ul class="grid grid-cols-1 mt-6">
                <li>
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mb-[5rem]">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                                        Qty
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    item?.dataItem?.OrderItem?.map((ele) => {
                                      
                                        return (
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {ele.Name}
                                                </th>

                                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {ele.Category}
                                                </th>
                                                <td class="py-4 px-5">
                                                    NPR {ele.price}
                                                </td>

                                                <td class="py-4 px-5">
                                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled="true">
                                                        <option value="US">Received</option>
                                                        <option value="US">Cooking</option>
                                                        <option value="CA">Ready</option>
                                                    </select>
                                                </td>
                                                <td class="py-4 px-6">
                                                    <div>
                                                        <input value={ele.Qty} disabled={true} type="number" placeholder="0" min="0" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                    </div>
                                                </td>
                                                <td class="py-4 px-5">
                                                    <button type="submit" value={ele.id} onClick={onDelete} class="text-white ml-2 bg-[#f24667] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                        
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default OrderedItem;