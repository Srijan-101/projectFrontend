import React from 'react'
import AddWorker from './Components/AddWorker'
import Worker from './Worker'
import { useState } from 'react'
import MessageDisplay from '../../AuthComp/Helper/MessageDisplay'
import { isAuth} from '../../Helper/helper';


const Profile = () => {

    const InitialValues = {
        name : '',
        post : 'Waiter',
        email : '',
        phonenumber : '',
        outletId : isAuth().outletId,
    }

    const MessageType = {
        message: 'Unauthorized',
        type: 'is-primary',
        error: false
    }

    const [values,setValues] = useState(InitialValues);
    const [message, setMessage] = useState(MessageType);
    const [loading, setLoading] = useState(false);
    
    const [Flag, setFlag] = useState(false);
    
    const Onchange  = name => e  => {
        setValues((prevState) => {
             return {...prevState,[name]:e.target.value}
        })
    }


    return (
        <>
            <div class="flex-1 max-w-6xl md:max-w-6xl mx-auto p-1 mt-6">
            <h1 className="font-semibold text-2xl mb-1 ml-2">Add Worker</h1>
            <h1 className="font-semibold text-gray-400 ml-2 mb-3 text-1xl">Fill below details to add worker.</h1>
                <ul class="grid grid-cols-1">
                    <li className='w-full md:w-[40rem] md:m-4'>
                       {message.error ? <MessageDisplay message={message.message} type={message.type} /> : null}
                          <AddWorker values={values} setValues={setValues} onChange={Onchange} setMessage={setMessage} loading={loading} setLoading={setLoading} Flag={Flag} setFlag={setFlag}/>
                          <hr/>
                    </li>
                    <li className='w-full mt-[-2rem]'>
                         <Worker Flag={Flag} setFlag={setFlag}/>
                    </li>
               </ul>
            </div>
        </>
    )
}

export default Profile
