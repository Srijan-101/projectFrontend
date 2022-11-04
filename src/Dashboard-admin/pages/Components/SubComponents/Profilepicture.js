import { useState } from 'react'


const Profilepicture = () => {
    const [image, setImage] = useState({
        profileImg: "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
    })
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    return (
        <>  
           
            <img class="w-[6rem] h-[6rem] rounded-full mb-3" src={image.profileImg} alt="Rounded avatar"></img>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input" >Upload file</label>
            <input class="block mb-5 text-xs text-gray-900 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"  type="file" accept="image/*" name="image-upload" id="small_size" onChange={imageHandler}></input>
        </>
    )
}

export default Profilepicture;