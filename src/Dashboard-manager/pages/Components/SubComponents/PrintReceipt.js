
import React from 'react'

export const PrintReceipt = React.forwardRef((props,ref) => {
    let TotalPrice = 0;
    return (
      
        <div  style={{ display: "none" }}>
              <div  className="flex p-6 h-screen justify-center items-center ">
                <div className="flex-col justify-center  bg-white py-12 px-14 border-2 border-grey-500 rounded-xl ">
                    <div ref={ref}   class="flex-1 max-w-6xl md:max-w-6xl mx-auto p-1 mt-4">
                        <h1 className="font-semibold text-3xl mb-1 ml-2 mb-6">Receipt</h1>
                        <h1 className="font-semibold text-gray-400 ml-2 mb-4 text-1xl">Date : {new Date().toLocaleDateString('sv')}</h1>
                        <h1 className="font-semibold text-gray-400 ml-2 mb-4 text-1xl">Receipt no : #{Date.now()}</h1>
                        <ul class="grid grid-cols-1">
                            <li  className='w-full md:w-[30rem] md:m-2'>
                                <table class="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="py-3 px-4">
                                                Name
                                            </th>
                                            <th scope="col" class="py-3 px-4">
                                                Category
                                            </th>
                                            <th scope="col" class="py-3 px-4">
                                                Price
                                            </th>
                                            <th scope="col" class="py-3 px-2">
                                                Qty
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { 
                                           
                                            props.data?.map((ele) => {
                                                TotalPrice = TotalPrice + (ele.Qty * ele.price)
                                                return (
                                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th scope="row" class="py-4 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {ele.Name}
                                                        </th>

                                                        <th scope="row" class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {ele.Category}
                                                        </th>
                                                        <td class="py-4 px-1">
                                                            NPR {ele.price}
                                                        </td>

                                                        <td class="py-4 px-3">
                                                            <div>
                                                               {ele.Qty} 
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )

                                            })
                                        }

                                    </tbody>
                                    <tr>
                                        <td class="py-4 px-2 text-lg float-left ">
                                            <div>
                                                <h1 className='mt-3 mb-2 text-lg text-gray-900'>Total Price: NPR {TotalPrice}</h1>
                                                
                                            </div>
                                        </td>
                                    </tr>
                                </table>    
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
  });




export default PrintReceipt;