

const OutletTable = () => {
    return (
        <>
                <ul class="grid grid-cols-1 m-6">
                    <li class="bg-white rounded-lg shadow-xl">
                        <div class="overflow-x-auto relative">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="py-3 px-6">
                                            Outlets
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Manager
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Phone no
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Today's Sales 
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Shankhamul Outlet
                                        </th>
                                        <td class="py-4 px-6">
                                            Srijan kc
                                        </td>
                                        <td class="py-4 px-6">
                                            01-636373
                                        </td>
                                        <td class="py-4 px-6">
                                            Rs. 1534.00
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Durbarmarg Outlet
                                        </th>
                                        <td class="py-4 px-6">
                                            Jitendra shah
                                        </td>
                                        <td class="py-4 px-6">
                                            01-45373
                                        </td>
                                        <td class="py-4 px-6">
                                           Rs. 24534.00
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Balkumari Outlet
                                        </th>
                                        <td class="py-4 px-6">
                                            Rimisha gurung
                                        </td>
                                        <td class="py-4 px-6">
                                            01-693373
                                        </td>
                                        <td class="py-4 px-6">
                                        Rs. 94534.00
                                        </td>
                                    </tr>
                                    <tr class="bg-white dark:bg-gray-800">
                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Jawalkhel Outlet
                                        </th>
                                        <td class="py-4 px-6">
                                             Niha shrestha
                                        </td>
                                        <td class="py-4 px-6">
                                            01-679337
                                        </td>
                                        <td class="py-4 px-6">
                                        Rs. 934.00
                                        </td>
                                    </tr>
                                    <tr>
                                         <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                           <button type="button" class="text-white bg-[#04d1b2]   focus:ring-1 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Manage outlets</button>
                                         </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </li>
                </ul>
        </>
    )
}

export default OutletTable;