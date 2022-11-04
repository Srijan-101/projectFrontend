import AddMenu from "./Components/AddMenu";
import MenuTable from "./Components/MenuTable";
import { useState } from "react";


const Menu = () => {
    const [Flag, setFlag] = useState(false);

    return (
    <>
        <div class="flex-1 max-w-6xl md:max-w-6xl mx-auto p-1 mt-6">
             
            <h1 className="font-semibold text-2xl mb-1 ml-2">Manage Menu</h1>
            <h1 className="font-semibold text-gray-400 ml-2 mb-3 text-1xl">Fill below details to add item to menu</h1>
            <ul class="grid grid-cols-1">
                <li className='w-full md:w-[40rem] md:m-4'>
                   
                    <AddMenu Flag={Flag} setFlag={setFlag}/>
                    <hr />
                </li>
                <li className='w-full mt-[-2rem] '>
                    <div class="flex-1 max-w-6xl md:max-w-6xl mx-auto p-1 mt-6">
                        <h1 className="font-semibold text-2xl mb-1 ml-2">Menu</h1>
                        <h1 className="font-semibold text-gray-400 ml-2 mb-3 text-1xl">Manage menu</h1>
                    </div>
                            <MenuTable  className="mt-6" Flag={Flag} setFlag={setFlag}/>
                        </li>
                    </ul>
                </div>
            </>
                )
}

                export default Menu;