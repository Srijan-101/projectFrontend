import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuth } from "../Helper/helper";



const ActivateGuard = () => {
    const location = useLocation();

    return (
           !isAuth().isActivate ? <Navigate to="/Activate" state={{from:location}} replace/>
           : <Outlet/>
    )
    
}

export default ActivateGuard;