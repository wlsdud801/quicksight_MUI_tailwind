import React from 'react';
import './App.css';
import { Box, CssBaseline } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import SideNav from './components/Layout/SideNav';
import Header from './components/Layout/Header';
import { useRecoilState } from 'recoil';
import { navState } from './recoil/nav';
import Datasets from './page/Datasets';
import Analysis from './page/Analysis';
import Community from './page/Community';
import Dashboard from './page/Dashboard';
import Favorite from './page/Favorite';
import MyFolders from './page/MyFolders';
import Recent from './page/Recent';
import SharedFolders from './page/SharedFolders';

function App() {
    const [open, setOpen] = React.useState(true);

    const [nav, setNav] = useRecoilState(navState);
    const selectMenu = {
        Analysis: <Analysis />,
        Community: <Community />,
        Dashboards: <Dashboard />,
        Datasets: <Datasets />,
        Favorite: <Favorite />,
        'My Folders': <MyFolders />,
        'Shared Folders': <SharedFolders />,
        Recent: <Recent />,
    };
    return (
        <>
            <CssBaseline />
            <Header />
            <div style={{ display: 'flex' }}>
                <SideNav />
                <Box p={2} sx={{ width: '100%' }}>
                    {nav && selectMenu[nav]}
                </Box>
            </div>
        </>
    );
}

export default App;
