const Workers = () => {
    return (
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
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
                            Post
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Phone number
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Manage
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                            <div class="pl-3">
                                <div class="text-base font-semibold">Govinda Gurung</div>
                                <div class="font-normal text-gray-500">Govinda.12@gmail.com</div>
                            </div>
                        </td>
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Manager
                        </th>

                        <td class="py-4 px-6">
                            +977-01567467
                        </td>
                        <td class="py-4 px-6">
                            <button type="submit" class="text-white ml-2 bg-[#f24667] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Delete</button>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese image" />
                            <div class="pl-3">
                                <div class="text-base font-semibold">Govinda Gurung</div>
                                <div class="font-normal text-gray-500">Govinda.12@gmail.com</div>
                            </div>
                        </td>
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Waiter
                        </th>
                        <td class="py-4 px-6">
                            +977-01567467
                        </td>
                        <td class="py-4 px-6">
                            <button type="submit" class="text-white ml-2 bg-[#f24667] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Delete</button>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Jese image" />
                            <div class="pl-3">
                                <div class="text-base font-semibold">Govinda Gurung</div>
                                <div class="font-normal text-gray-500">Govinda.12@gmail.com</div>
                            </div>
                        </td>
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Waiter
                        </th>
                        <td class="py-4 px-6">
                            +977-01567467
                        </td>
                        <td class="py-4 px-6">
                            <button type="submit" class="text-white ml-2 bg-[#f24667] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Delete</button>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
                            <div class="pl-3">
                                <div class="text-base font-semibold">Govinda Gurung</div>
                                <div class="font-normal text-gray-500">Govinda.12@gmail.com</div>
                            </div>
                        </td>
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Waiter
                        </th>
                        <td class="py-4 px-6">
                            +977-01567467
                        </td>
                        <td class="py-4 px-6">
                            <button type="submit" class="text-white ml-2 bg-[#f24667] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Delete</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
export default Workers;