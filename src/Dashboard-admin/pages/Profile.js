import React from 'react'
import AddOutlets from './Components/AddOutlets'
import OutletInformation from './Components/OutletInformation'
import MessageDisplay from'../../AuthComp/Helper/MessageDisplay'

import {useState} from 'react';


const Profile = () => {

    const InitialValues = {
        outletName : '',
        location : '',
        phoneNumber : '',
        ManagerEmail : '',
        id : '',
    }

    const MessageType = {
        message: 'Unauthorized',
        type: 'is-primary',
        error: false
    }

    const [values,setValues] = useState(InitialValues);
    const [message, setMessage] = useState(MessageType);
    const [loading, setLoading] = useState(false);
    
    const Onchange  = name => e  => {
        setValues((prevState) => {
             return {...prevState,[name]:e.target.value}
        })
    }

    return (
        <>
            <div class="flex-1 max-w-5xl md:max-w-6xl mx-auto p-1 mt-6">
            <h1 className="font-semibold text-2xl mb-1 ml-2">Add Outlet</h1>
            <h1 className="font-semibold text-gray-400 ml-2 mb-3 text-1xl">Fill below details to add outlet.</h1>
                <ul class="grid grid-cols-1">
                
                    <li className='w-full md:w-[40rem] md:m-4'>
                    {message.error ? <MessageDisplay message={message.message} type={message.type} /> : null}
                          <AddOutlets values={values} setValues={setValues} onChange={Onchange} setMessage={setMessage} loading={loading} setLoading={setLoading}/>
                          <hr/>
                    </li>
                    <li className='w-full max-w-5xl pb-6 md:max-w-5xl'>
                         <OutletInformation values={values} setValues={setValues} onChange={Onchange} setMessage={setMessage} loading={loading} setLoading={setLoading}/>
                    </li>
               </ul>
            </div>
        </>
    )
}

export default Profile
