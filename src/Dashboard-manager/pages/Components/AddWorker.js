
import axios from 'axios';
import { getCookie } from '../../../Helper/helper';


const AddWorker = ({ values, onChange, setMessage, setLoading, loading, setValues, Flag, setFlag }) => {

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {


            const data = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API}/api/AddWorker`,
                headers : {
                    'Authorization' : 'Bearer ' + getCookie('token')
                },
                data: {
                    post : values.post,
                    email : values.email,
                    phonenumber : values.phonenumber,
                    outletId : values.outletId
                }
            })
            setMessage({ error: true, message: data.data.message, type: "is-primary" })
            setLoading(false);
            Flag ? setFlag(false) : setFlag(true)
            setValues({
                name : '',
                post : 'Waiter',
                email : '',
                phonenumber : '',
            });
            console.log(values);
        } catch (error) {
            setMessage({ error: true, message: error.response.data.error, type: "is-danger" })
            setLoading(false);
            Flag ? setFlag(false) : setFlag(true)
        }
        setLoading(false);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Worker Name</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={onChange('name')} value={values.name} />
                    </div>
                    <div>
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an post</label>
                        <select onChange={onChange('post')} value={values.post} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="Waiter" onChange={onChange('post')} >Waiter</option>
                            <option value="Kitchen" onChange={onChange('post')} >Kitchen</option>
                        </select>
                    </div>
                    <div>
                        <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"  >Worker email</label>
                        <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={onChange('email')} value={values.email} />
                        <p class=" mt-[-1rem] text-sm text-green-600 dark:text-green-500">Enter <span class="font-medium"> email </span>address of worker.</p>
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Phone number</label>
                        <input type="tel" id="phone" value={values.phonenumber} onChange={onChange('phonenumber')} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="016763636" required="" />
                    </div>
                </div>
                <button type="submit" class="text-white bg-[#04d1b2] focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add</button>
            </form>

        </>
    )
}

export default AddWorker;