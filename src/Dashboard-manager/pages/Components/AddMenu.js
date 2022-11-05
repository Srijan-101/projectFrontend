import Menu from "../Menu"
import { isAuth, getCookie } from "../../../Helper/helper";
import { useState } from 'react'
import axios from "axios";
import MessageDisplay from '../../../AuthComp/Helper/MessageDisplay'


const AddMenu = ({Flag,setFlag}) => {
    const InitialValues = {
        name: '',
        category: '',
        price: '',
        outletId: isAuth().outletId,
    }

    const MessageType = {
        message: 'Unauthorized',
        type: 'is-primary',
        error: false
    }

    const [values, setValues] = useState(InitialValues);
    const [message, setMessage] = useState(MessageType);
    const [loading, setLoading] = useState(false);
    

    const onchange = name => e => {
        setValues((prevState) => {
            return { ...prevState, [name]: e.target.value }
        })
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {

            const data = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API}/api/AddMenu`,
                headers: {
                    'Authorization': 'Bearer ' + getCookie('token')
                },
                data: {
                    outletId: isAuth().outletId,
                     Name:values.name,
                     Price: parseInt(values.price),
                     Category : values.category
                }
            })
            setMessage({ error: true, message: data.data.message, type: "is-primary" })
            Flag ? setFlag(false) : setFlag(true)
            setLoading(false);
            setValues(InitialValues);
        } catch (error) {
            Flag ? setFlag(false) : setFlag(true)
            setMessage({ error: true, message: error.response.data.error, type: "is-danger" })
            setLoading(false);
        }
        setLoading(false);
    }


    return (
        <form onSubmit={onSubmit}>
            {message.error ? <MessageDisplay message={message.message} type={message.type} /> : null}
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Item Name</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={values.name} onChange={onchange('name')} />
                </div>
                <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a category</label>
                    <select value={values.category} defaultValue="PORK" onChange={onchange('category')} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="PORK">PORK</option>
                        <option value="SEA FOOD">SEA FOOD</option>
                        <option value="CHICKEN">CHICKEN</option>
                        <option value="FAST FOOD">FAST FOOD</option>
                    </select>
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter price</label>
                    <input value={values.price} onChange={onchange('price')} type="number" id="phone" min="0" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="250" required="" />
                </div>
            </div>
            <button type="submit" class="text-white bg-[#04d1b2] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" disabled={loading ? true : false}>Add</button>
        </form>
    )
}

export default AddMenu;