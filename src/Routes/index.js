import {
    Activate,
    Signup,
    Login,
    PasswordReset,
    ResetPassword,
    ActivationJWT,
    NotAdded,
} from '../AuthComp/Index'


import { Routes, Route} from 'react-router-dom'
import PublicRoute from './PublicRoutes'
import RequireAuth from './RequireAuth';


//Routes Guard
import ActivateGuard from './ActivateGuard'
import RoleGuard from './RoleGuard'
import WorkersGuard from './WorkersGuard'
import MenuGuard from './MenuGuard';
import TablesGuard from './TablesGuard';
import PostGuard from './PostGuard';
import AddOutletGuard from './AddOutletGuard'
import ViewoutletGuard from './ViewOutletGuard';
import TablePageGuard  from './TablePage'


const MainRoutes = () => {

    return (

        <Routes>
            //Public Routes
            <Route element={<PublicRoute restriction={true} />}>
                <Route exact path="/" element={<Login />} />
            </Route>

            <Route element={<PublicRoute restriction={true} />}>
                <Route exact path="Signup" element={<Signup />} />
            </Route>

            <Route element={<PublicRoute restriction={true} />}>
                <Route exact path="auth/verify/:token" element={<ActivationJWT />} />
            </Route>

            <Route element={<PublicRoute restriction={true} />}>
                <Route exact path="PasswordReset" element={<PasswordReset />} />
            </Route>

            <Route element={<PublicRoute restriction={true} />}>
                <Route exact path="ResetPassword/:token" element={<ResetPassword />} />
            </Route>
        

        //Private Routes
            <Route element={<RequireAuth />}>
                <Route exact path="Activate" element={<Activate />} />
            </Route>

            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route exact path="denied" element={<NotAdded />} />
                </Route>
            </Route>

           //viewOutletByid only by Admin
            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route path="viewOutlet/:id" element={<ViewoutletGuard/>}/>
                    </Route>
                </Route>
            </Route>




           //Home page for everyone
            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route path="Home" element={<RoleGuard />} />
                    </Route>
                </Route>
            </Route>

            //Workers guard only for Manager and Admin
            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route path="Workers" element={<WorkersGuard/>}/>
                    </Route>
                </Route>
            </Route>

            //Menu for Manager and Waiter
            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route element={<MenuGuard/>} path="Menu"/>
                    </Route>
                </Route>
            </Route>

            //Tables for Manager and Waiter
            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route element={<TablesGuard/>} path="Tables"/>
                    </Route>
                </Route>
            </Route>

            //AddOutlet only for Admin
            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route element={<AddOutletGuard/>} path="Profile"/>
                    </Route>
                </Route>
            </Route>

            //TablePage
            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route element={<TablePageGuard/>} path="Table/:id"/>
                    </Route>
                </Route>
            </Route>
            
        </Routes>
    )
}

export default MainRoutes;