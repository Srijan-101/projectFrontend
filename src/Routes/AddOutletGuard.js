import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuth } from "../Helper/helper";

//Admin
import Layout from '../Dashboard-admin/components/Layout';
import Background from '../Dashboard-admin/components/Background';


//Home
import  {Profile} from '../Dashboard-admin/index'




const AddOutletGuard = () => {
    return isAuth().role === "Admin" ? <Background><Layout><Profile/></Layout></Background>
            : <Navigate to="../Home"/>
}

export default AddOutletGuard;