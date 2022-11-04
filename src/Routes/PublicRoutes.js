
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuth } from "../Helper/helper";


const PublicRoutes = ({restriction}) => {
    const location = useLocation();
   
    return (
           isAuth() && restriction ? <Navigate to="Home" state={{from:location}} replace/>
           : <Outlet/>
    )
    
}

export default PublicRoutes;