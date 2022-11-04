
const OrderedItem = () => {
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
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Chicken chilly
                                    </th>

                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Chicken
                                    </th>
                                    <td class="py-4 px-5">
                                        NPR 250
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
                                            <input type="number" placeholder="0" min="0" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                    </td>
                                    <td class="py-4 px-5">
                                        <button type="submit" class="text-white ml-2 bg-[#f24667] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Delete</button>
                                    </td>



                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Spicy pork barbeque
                                    </th>

                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Pork
                                    </th>
                                    <td class="py-4 px-5">
                                        NPR 450
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
                                            <input type="number" placeholder="0" min="0" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                    </td>
                                    <td class="py-4 px-5">
                                        <button type="submit" class="text-white ml-2 bg-[#f24667] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" disabled="true">Delete</button>
                                    </td>

                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Oven grilled chicken
                                    </th>

                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Chicken
                                    </th>
                                    <td class="py-4 px-5">
                                        NPR 450
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
                                            <input type="number" placeholder="0" min="0" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                    </td>
                                    <td class="py-4 px-5">
                                        <button type="submit" class="text-white ml-2 bg-[#f24667] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Delete</button>
                                    </td>

                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Chicken Pizza
                                    </th>

                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Chicken
                                    </th>
                                    <td class="py-4 px-5">
                                        NPR 450
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
                                            <input type="number" placeholder="0" min="0" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                    </td>
                                    <td class="py-4 px-5">
                                        <button type="submit" class="text-white ml-2 bg-[#f24667] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Delete</button>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div class="mt-1 flex lg:mt-0 lg:ml-4 ">
                                            <span class="sm:block">
                                                <button type="button" class="inline-flex mr-2 items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                                                    Generate bill
                                                </button>
                                            </span>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default OrderedItem;