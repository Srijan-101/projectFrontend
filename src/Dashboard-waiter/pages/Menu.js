import MenuTable from "./Components/MenuTable";


const Menu = () => {
    return (

        <div class="flex-1 max-w-6xl md:max-w-6xl mx-auto p-1 mt-6">
            <ul class="grid grid-cols-1">
                <li className='w-full mt-[-2rem] '>
                    <div class="flex-1 max-w-6xl md:max-w-6xl mx-auto p-1 mt-6">
                        <h1 className="font-semibold text-2xl mb-1 ml-2">Menu</h1>
                    </div>
                            <MenuTable  className="mt-6"/>
                        </li>
                    </ul>
                </div>
     )
}

                export default Menu;