

const OutletInformation = () => {
    return (
        <>

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Outlets
                        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Manage outlets</p>
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Outlet name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Location
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Manager
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Phone no
                            </th>
                            <th scope="col" class="py-3 px-6">
                                <span class="sr-only">View</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Shankhamul Outlet
                            </th>
                            <td class="py-4 px-6">
                                Shankhamul,lalitpur
                            </td>

                            <td scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Govinda Gurung</div>
                                    <div class="font-normal text-gray-500">Govinda.12@gmail.com</div>
                                </div>
                            </td>

                            <td class="py-4 px-6">
                                +977-01567467
                            </td>
                            <td class="py-4 px-6 text-right">
                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View</button>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Jawlakhel Outlet
                            </th>
                            <td class="py-4 px-6">
                                Jawlakhel,lalitpur
                            </td>

                            <td scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese image" />
                                <div class="pl-3">
                                    <div class="text-base font-semibold">Hari shrestha</div>
                                    <div class="font-normal text-gray-500">hari.Shrestha@gmail.com</div>
                                </div>
                            </td>

                            <td class="py-4 px-6">
                                +977-01567467
                            </td>
                            <td class="py-4 px-6 text-right">
                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default OutletInformation;