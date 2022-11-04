import React from 'react'
import Workers from './Components/Workers'

const Worker = ({Flag,setFlag}) => {
    
    return (
        <>
        <div class="flex-1 pb-6 max-w-5xl md:max-w-6xl mx-auto p-1 mt-6">
            <h1 className="font-semibold text-2xl mb-1 ml-2">View workers details.</h1>
            <h1 className="font-semibold text-gray-400 ml-2 mb-3 text-1xl">Search workers</h1>
                <ul class="grid grid-cols-1">
                    <li>
                          <Workers Flag={Flag} setFlag={setFlag}/>
                    </li>
               </ul>
            </div>
        </>
    )
}

export default Worker;
