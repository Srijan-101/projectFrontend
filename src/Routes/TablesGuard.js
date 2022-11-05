import { isAuth } from "../Helper/helper";


//Manager
import LayoutManager from '../Dashboard-manager/components/Layout';
import BackgroundManager from '../Dashboard-manager/components/Background';

//Waiter
import LayoutWaiter from "../Dashboard-waiter/components/Layout";
import BackgroundWaiter from "../Dashboard-waiter/components/Background";


//Menu
import  {Tables as ManagerTables} from '../Dashboard-manager/index'

//Waiter
import { WaiterTables} from "../Dashboard-waiter";
import { Navigate } from "react-router-dom";



const TablesGuard = () => {
    return isAuth().post === "Manager" ? <BackgroundManager><LayoutManager><ManagerTables/></LayoutManager></BackgroundManager>
            : isAuth().post === "Waiter" ? <BackgroundWaiter><LayoutWaiter><WaiterTables/></LayoutWaiter></BackgroundWaiter>
            :  <Navigate to="../Home"/>

}

export default TablesGuard;