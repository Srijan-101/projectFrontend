import axios from 'axios'
import {getCookie} from '../../../Helper/helper';

const AddOutlets = ({values,onChange,setMessage,setLoading,loading,setValues}) => {
   
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(getCookie());
        setLoading(true);
            try {
                
                const data = await axios({
                    method: 'POST',
                    url: `${process.env.REACT_APP_API}/api/CreateOutlet`,
                    headers : {
                        'Authorization' : 'Bearer ' + getCookie('token')
                    },
                    data: values
                })
                setMessage({error: true,message:data.data.message,type: "is-primary"})
                setLoading(false);
                setValues({});
                window.location.reload();
            } catch (error) {
                  setMessage({error: true,message:error.response.data.message,type: "is-danger"})
                  setLoading(false);
            }
            setLoading(false);
    }

    return (
        <> 
            <form onSubmit={onSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Outlet Name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={values.outletName} onChange={onChange('outletName')}/ >
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Location</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={values.location} onChange={onChange('location')}/>
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Assign Manager</label>
                        <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={values.ManagerEmail} onChange={onChange('ManagerEmail')}/>
                        <p className=" mt-[-1rem] text-sm text-green-600 dark:text-green-500">Enter <span className="font-medium"> email </span>address of worker.</p>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="016763636" required="" value={values.phoneNumber} onChange={onChange('phoneNumber')}/>
                    </div>
                </div>
                <button type="submit" className="text-white bg-[#04d1b2] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" disabled={loading ? true : false}>Add</button>
            </form>

        </>
    )
}

export default AddOutlets;