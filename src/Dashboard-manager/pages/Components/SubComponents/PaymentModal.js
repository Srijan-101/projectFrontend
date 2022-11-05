import axios from 'axios'
import { getCookie } from '../../../../Helper/helper'
import { useState } from 'react'

const PaymentModal = ({ content }) => {

    const onClose = () => {
       const id = document.getElementById('PaymentModal');
       id.style.display = "none";
    }

    let TotalPrice = 0;
    return (
        <div className="bg-white-200 fixed inset-0 z-50" id="PaymentModal" style={{display:"none"}}>
            <div className="flex h-screen justify-center items-center ">
                <div className="flex-col justify-center  bg-white py-12 px-14 border-2 border-grey-500 rounded-xl ">
                    <button type="button" onClick={onClose} class="float-right text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="flex-1 max-w-5xl md:max-w-5xl mx-auto p-1 mt-4">

                        <h1 className="font-semibold text-2xl mb-1 ml-2">Details</h1>
                        <h1 className="font-semibold text-gray-400 ml-2 mb-4 text-1xl">Make payment and generate bill</h1>
                        <ul class="grid grid-cols-1">
                            <li className='w-full md:w-[30rem] md:m-2'>
                                <table class="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="py-3 px-4">
                                                Name
                                            </th>
                                            <th scope="col" class="py-3 px-4">
                                                Category
                                            </th>
                                            <th scope="col" class="py-3 px-4">
                                                Price
                                            </th>
                                            <th scope="col" class="py-3 px-2">
                                                Qty
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            content?.map((ele) => {
                                                TotalPrice = TotalPrice + (ele.Qty * ele.price)
                                                return (
                                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th scope="row" class="py-4 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {ele.Name}
                                                        </th>

                                                        <th scope="row" class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {ele.Category}
                                                        </th>
                                                        <td class="py-4 px-1">
                                                            NPR {ele.price}
                                                        </td>

                                                        <td class="py-4 px-3">
                                                            <div>
                                                                <input value={ele.Qty} disabled={true} type="number" placeholder="0" min="0" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )

                                            })
                                        }

                                    </tbody>
                                    <tr>
                                        <td class="py-4 px-2 text-lg float-left ">
                                            <div>
                                                <h1 className='mt-3 mb-2'>Total Price</h1>
                                                <input disabled={true} value={TotalPrice} type="number" placeholder="0" min="0" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <hr/>
                                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white mt-2">Payment method</h3>
                                <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                        <div class="flex items-center pl-3">
                                            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Cash</label>
                                        </div>
                                    </li>
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                        <div class="flex items-center pl-3">
                                            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Online banking/Card</label>
                                        </div>
                                    </li>
                                </ul>
                                <button type="submit" class="ml-2 mt-5 text-white bg-[#04d1b2] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Generate bills</button>
                                <hr />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentModal;