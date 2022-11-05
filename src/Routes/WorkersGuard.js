import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuth } from "../Helper/helper";

//Admin
import Layout from '../Dashboard-admin/components/Layout';
import Background from '../Dashboard-admin/components/Background';


//Manager
import LayoutManager from '../Dashboard-manager/components/Layout';
import BackgroundManager from '../Dashboard-manager/components/Background';




//Home
import  {Worker} from '../Dashboard-admin/index'
import  {Profile as ManagerWorkers} from '../Dashboard-manager/index'




const WorkersGuard = () => {
     return isAuth().role === "Admin" ? <Background><Layout><Worker/></Layout></Background>
            : isAuth().post === "Manager" ?  <BackgroundManager><LayoutManager><ManagerWorkers/></LayoutManager></BackgroundManager>
            : <Navigate to="../Home"/>
     
}

export default WorkersGuard;