import OrderedItem from "./OrderedItem";

import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const TablePage = () => {
    const [Flag,SetFlag] = useState(false);
    const location = useLocation()

    return (
    <>
        <div class="flex-1 max-w-5xl md:max-w-5xl mx-6 p-1 mt-5 mb-[40rem]">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="min-w-0 flex-1">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Table {location.state.name}</h2>
                    <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    </div>
                </div>
            </div>
            <OrderedItem Flag={Flag} SetFlag={SetFlag} />
        </div>
    </>
    )
}

export default TablePage;