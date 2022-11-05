import { isAuth } from "../Helper/helper";


//Manager
import LayoutManager from '../Dashboard-manager/components/Layout';
import BackgroundManager from '../Dashboard-manager/components/Background';

//Waiter
import LayoutWaiter from "../Dashboard-waiter/components/Layout";
import BackgroundWaiter from "../Dashboard-waiter/components/Background";


//Menu
import  {TablePage as ManagerMenu} from '../Dashboard-manager/index'

//Waiter
import {WaiterTablePage} from "../Dashboard-waiter";
import { Navigate } from "react-router-dom";



const TablePageGuard = () => {
    return isAuth().post === "Manager" ? <BackgroundManager><LayoutManager><ManagerMenu /></LayoutManager></BackgroundManager>
            : isAuth().post === "Waiter" ? <BackgroundWaiter><LayoutWaiter><WaiterTablePage/></LayoutWaiter></BackgroundWaiter>
            :  <Navigate to="../Home"/>

}

export default TablePageGuard;