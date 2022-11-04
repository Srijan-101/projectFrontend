import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Setting from './pages/Setting'
import Profile from './pages/Profile'
import Worker from './pages/Worker'
import ViewOutlet from './pages/Components/SubComponents/ViewOutlet'
import Tables from './pages/Tables'
import Menu from './pages/Menu'
import TablePage from './pages/TablePage'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Settings' element={<Setting />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/Workers' element={<Worker />} />
                    <Route path='/viewOutlet' element={<ViewOutlet/>} />
                    <Route path='/tables' element={<Tables/>} />
                    <Route path='/menu' element={<Menu/>} />
                    <Route path='/tablepage' element={<TablePage/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
