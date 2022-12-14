import OrderedItem from "./Components/OrderedItem";
import OrderMenu from "./Components/OrderMenu";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const TablePage = () => {
    const [Flag,SetFlag] = useState(false);
    const location = useLocation()

    return (
    <>
        <div class="flex-1 max-w-5xl md:max-w-5xl mx-6 p-1 mt-5">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="min-w-0 flex-1">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Table {location.state.name}</h2>
                    <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    </div>
                </div>
            </div>
            <OrderedItem Flag={Flag} SetFlag={SetFlag} />
        </div>
        <div class="flex-1 max-w-5xl md:max-w-5xl mx-6  p-1 mb-[5rem]">
            <h1 className="font-semibold text-2xl mb-1 ml-2">Outlet Menu</h1>
            <h1 className="font-semibold text-gray-400 ml-2 mb-3 text-1xl">Menu to take an order</h1>
                <ul class="grid grid-cols-1">
                    <li className='w-full  md:m-4'>
                           <OrderMenu Flag={Flag} SetFlag={SetFlag} />
                          <hr/>
                    </li>
               </ul>
            </div>
    </>
    )
}

export default TablePage;