import React from 'react'
import AddWorker from './Components/AddWorker'
import Worker from './Worker'

const Profile = () => {
    return (
        <>
            <div class="flex-1 max-w-6xl md:max-w-6xl mx-auto p-1 mt-6">
            <h1 className="font-semibold text-2xl mb-1 ml-2">Add Worker</h1>
            <h1 className="font-semibold text-gray-400 ml-2 mb-3 text-1xl">Fill below details to add worker.</h1>
                <ul class="grid grid-cols-1">
                    <li className='w-full md:w-[40rem] md:m-4'>
                          <AddWorker/>
                          <hr/>
                    </li>
                    <li className='w-full mt-[-2rem]'>
                         <Worker/>
                    </li>
               </ul>
            </div>
        </>
    )
}

export default Profile
