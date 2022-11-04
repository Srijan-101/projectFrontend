import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuth } from "../Helper/helper";

//Admin
import Layout from '../Dashboard-admin/components/Layout';
import Background from '../Dashboard-admin/components/Background';


//Manager
import LayoutManager from '../Dashboard-manager/components/Layout';
import BackgroundManager from '../Dashboard-manager/components/Background';

//Home
import  {Home} from '../Dashboard-admin/index'
import  {Home as ManagerHome} from '../Dashboard-manager/index'


const RoleGuard = () => {
    return isAuth().role === "Admin" ? <Background><Layout><Home /></Layout></Background>
    : <BackgroundManager><LayoutManager><ManagerHome /></LayoutManager></BackgroundManager>
}

export default RoleGuard;