import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuth } from "../Helper/helper";

const RequireAuth = () => {
    const location = useLocation();
    const {auth} = isAuth();

    return (
         isAuth() ? <Outlet/>
            : <Navigate to="/" state={{ from: location }} replace />
    )
}

export default RequireAuth;