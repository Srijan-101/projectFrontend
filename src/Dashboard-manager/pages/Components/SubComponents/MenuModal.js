import axios from 'axios'
import { getCookie } from '../../../../Helper/helper'
import { useState } from 'react'

const MenuModal = ({ setModalOn, setChoice, id, values ,Flag,setFlag}) => {

    const [Item, SetItem] = useState({
        name: values.Name,
        category: values.Category,
        price: parseInt(values.price),
        status : values.status
    })

    const onChange = name => e => {
        SetItem((prevState) => {
            return { ...prevState, [name]: e.target.value }
        })
    }

    const handleOKClick = async (e) => {
        e.preventDefault();
        await axios({
            method: "PUT",
            url: `${process.env.REACT_APP_API}/api/UpdateMenu`,
            headers: {
                'Authorization': 'Bearer ' + getCookie('token')
            },
            data: {
                id,
                name: Item.name,
                price: parseInt(Item.price),
                category: Item.category,
                status : Item.status
            }
        }).then(() => {
            Flag ? setFlag(false) : setFlag(true)
            let a = document.getElementById(id);
            a.style.display = "none"
        }).catch(() => {
            Flag ? setFlag(false) : setFlag(true)
            let a = document.getElementById(id);
            a.style.display = "none"
        })
    }
    const handleCancelClick = () => {
        
        console.log(id);
        let a = document.getElementById(id);
        a.style.display = "none"
    }

    return (
        <div id={id} className="bg-white-200 fixed inset-0 z-50" style={{ display: "none" }}>
            <div className="flex h-screen justify-center items-center ">
                <div className="flex-col justify-center  bg-white py-12 px-24 border-2 border-grey-500 rounded-xl ">
                    <button type="button" onClick={handleCancelClick} class="float-right text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="flex-1 max-w-6xl md:max-w-6xl mx-auto p-1 mt-4">

                        <h1 className="font-semibold text-2xl mb-1 ml-2">Edit Menu</h1>
                        <h1 className="font-semibold text-gray-400 ml-2 mb-3 text-1xl">Fill below details to edit item to menu</h1>
                        <ul class="grid grid-cols-1">
                            <li className='w-full md:w-[30rem] md:m-4'>
                                <form onSubmit={handleOKClick}>

                                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                                        <div>
                                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Item Name</label>
                                            <input type="text" onChange={onChange('name')} value={Item.name} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        </div>
                                        <div>
                                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a category</label>
                                            <select defaultValue="PORK" onChange={onChange('category')} value={Item.category} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option value="PORK">PORK</option>
                                                <option value="SEA FOOD">SEA FOOD</option>
                                                <option value="CHICKEN">CHICKEN</option>
                                                <option value="FAST FOOD">FAST FOOD</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter price</label>
                                            <input type="number" onChange={onChange('price')} value={Item.price} id="phone" min="0" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        </div>
                                        <div>
                                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
                                            <select defaultValue="available" value={Item.status}  onChange={onChange('status')} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option value="available">Available</option>
                                                <option value="Not Available">Not available</option>
                                            </select>
                                        </div>


                                    </div>
                                    <button type="submit" class="text-white bg-[#04d1b2] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
                                </form>
                                <hr />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuModal;