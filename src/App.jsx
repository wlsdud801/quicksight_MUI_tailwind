import React from 'react';
import './App.css';
import SideNav from './components/Layout/SideNav';
import Header from './components/Layout/Header';
import Datasets from './page/Dataset';
import Analysis from './page/Analysis';
import Dashboard from './page/Dashboard';
import Favorite from './page/Favorite';
import MyFolders from './page/MyFolders';
import Recent from './page/Recent';
import SharedFolders from './page/SharedFolders';
import { Route, Routes, useLocation } from 'react-router-dom';
import DashboardDetail from './page/Dashboard/DashboardDetail';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import GlobalStyles from './styles/Globalstyles';

function App() {
    const location = useLocation();

    return (
        <>
            <GlobalStyles />
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex-1 flex overflow-hidden">
                    {location.pathname === '/Dashboard' ||
                    location.pathname === '/Dashboards/DashboardDetail' ? null : (
                        <SideNav />
                    )}
                    <main className="flex-1 ">
                        <Routes>
                            <Route path="/" element={<Favorite />}></Route>
                            <Route path="Recent" element={<Recent />}></Route>
                            <Route path="Myfolders" element={<MyFolders />}></Route>
                            <Route path="Sharedfolders" element={<SharedFolders />}></Route>
                            <Route path="Dashboards" element={<Dashboard />}></Route>
                            <Route path="Dashboards/DashboardDetail" element={<DashboardDetail />}></Route>
                            <Route path="Analysis" element={<Analysis />}></Route>
                            <Route path="Datasets" element={<Datasets />}></Route>
                        </Routes>
                    </main>
                </div>
            </div>
        </>
    );
}

export default App;
