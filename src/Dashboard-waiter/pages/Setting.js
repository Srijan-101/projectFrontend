import React from 'react'
import ChangePassword from './Components/ChangePassword';
import ChangeSetting from './Components/ChangeSetting';
import Profilepicture from './Components/SubComponents/Profilepicture';

const Setting = () => {
    return (
        <div class="flex-1 max-w-6xl md:max-w-6xl mx-auto p-1 mt-6 mb-[5rem]">
            <h1 className="font-semibold text-2xl mb-1 ml-2">Edit personal details</h1>
            <h1 className="font-semibold text-gray-400 ml-2 mb-3 text-1xl">Fill below details</h1>
                <ul class="grid grid-cols-1">
                    <li className='w-full md:w-[40rem] md:m-4'>
                          <Profilepicture className="mb-2"/>
                          <ChangeSetting/>
                          <hr/>
                    </li>
                    <h1 className="font-semibold text-2xl mb-1 ml-2">Change password</h1>
                    <h1 className="font-semibold text-gray-400 ml-2 mb-3 text-1xl">Fill below details</h1>
                    <li className='w-full md:w-[20rem] md:m-4'>
                        <ChangePassword/>
                    </li>
               </ul>
            </div>
    )
}

export default Setting;
