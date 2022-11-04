import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuth } from "../Helper/helper";


const PostGuard = () => {
    const location = useLocation();

    return (
        !(isAuth().post || isAuth().role === "Admin") ?
        <Navigate to="denied" state={{from:location}} replace/> : <Outlet/> 
    )
}

export default PostGuard;