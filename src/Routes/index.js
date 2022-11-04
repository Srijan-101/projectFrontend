import {
    Activate,
    Signup,
    Login,
    PasswordReset,
    ResetPassword,
    ActivationJWT,
    NotAdded,
} from '../AuthComp/Index'


import { Routes, Route } from 'react-router-dom'
import PublicRoute from './PublicRoutes'
import RequireAuth from './RequireAuth';
import { isAuth } from '../Helper/helper'

//Routes Guard
import ActivateGuard from './ActivateGuard'
import RoleGuard from './RoleGuard'


//Admin Routes 
import Layout from '../Dashboard-admin/components/Layout'
import Background from '../Dashboard-admin/components/Background'
import { Home, Worker, Setting, Profile, ViewOutlet } from '../Dashboard-admin/index'

//Manager Routes
import LayoutManager from '../Dashboard-manager/components/Layout'
import BackgroundManager from '../Dashboard-manager/components/Background'

import {
    Worker as ManagerWorker,
    Setting as ManagerSetting,
    Profile as ManagerProfile,
    Tables as ManagerTables,
    Menu as ManagerMenu
} from '../Dashboard-manager/index'
import PostGuard from './PostGuard';






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

           

            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route path="viewOutlet/:id"
                            element={isAuth().role === "Admin"
                                ? <Background><Layout><ViewOutlet /></Layout></Background>
                                : null
                            }
                        />
                    </Route>
                </Route>
            </Route>

            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route path="Home" element={<RoleGuard />} />
                    </Route>
                </Route>
            </Route>

            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route path="Workers"
                            element={isAuth().role === "Admin"
                                ? <Background><Layout><Worker /></Layout></Background>
                                : <BackgroundManager><LayoutManager><ManagerProfile /></LayoutManager></BackgroundManager>
                            }
                        />
                    </Route>
                </Route>
            </Route>

            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route path="Profile"
                            element={isAuth().role === "Admin"
                                ? <Background><Layout><Profile /></Layout></Background>
                                : <BackgroundManager><LayoutManager><ManagerProfile /></LayoutManager></BackgroundManager>
                            }
                        />
                    </Route>
                </Route>
            </Route>


            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route path="Menu"
                            element={isAuth().role === "Admin"
                                ? <Background><Layout><Profile /></Layout></Background>
                                : <BackgroundManager><LayoutManager><ManagerMenu /></LayoutManager></BackgroundManager>
                            }
                        />
                    </Route>
                </Route>
            </Route>

            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route path="Tables"
                            element={isAuth().role === "Admin"
                                ? <Background><Layout><Profile /></Layout></Background>
                                : <BackgroundManager><LayoutManager><ManagerTables /></LayoutManager></BackgroundManager>
                            }
                        />
                    </Route>
                </Route>
            </Route>

            <Route element={<RequireAuth />}>
                <Route element={<ActivateGuard />}>
                    <Route element={<PostGuard />}>
                        <Route path="Setting"
                            element={isAuth().role === "Admin"
                                ? <Background><Layout><Setting /></Layout></Background>
                                : <BackgroundManager><LayoutManager><ManagerSetting /></LayoutManager></BackgroundManager>
                            }
                        />
                    </Route>
                </Route>
            </Route>
        </Routes>
    )
}

export default MainRoutes;