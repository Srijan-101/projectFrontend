import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuth } from "../Helper/helper";

//Admin
import Layout from '../Dashboard-admin/components/Layout';
import Background from '../Dashboard-admin/components/Background';


//Home
import  {ViewOutlet} from '../Dashboard-admin/index'




const ViewoutletGuard = () => {
    return isAuth().role === "Admin" ? <Background><Layout><ViewOutlet/></Layout></Background>
            : <Navigate to="../Home"/>
}

export default ViewoutletGuard