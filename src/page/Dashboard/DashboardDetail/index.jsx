import { Box, Button, Divider, IconButton, List, ListItem, Tab, Tooltip } from '@mui/material';
import React, { useRef, useState } from 'react';
import DragnDropList from '../../../components/DragnDrop/DragnDropList';
import DragnDropGrid from '../../../components/DragnDrop/DragnDropGrid';
import SideToolBar from './components/SideToolBar';
import { DASHBOARD_MENU } from '../../../constant/dashboardMenu';
import { useRecoilState } from 'recoil';
import { sideToolbarState } from '../../../recoil/sideToolbar';
import { ICON_COMPONENTS } from '../../../constant/dashboardButtonController';
import { TAB_CONTENTS } from '../../../constant/tabContents';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const DashboardDetail = () => {
    const [activeMenu, setActiveMenu] = useRecoilState(sideToolbarState);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const ref = useRef([]);
    const openChildMenu = (index) => {
        const element = ref.current[index];

        ref.current.forEach((el, idx) => {
            if (el && idx !== index) {
                el.classList.add('hidden');
            }
        });

        if (element) {
            element.classList.toggle('hidden');
        }
    };

    const openSideToolbar = (index) => {
        setActiveMenu(index);
    };

    const addTabContainer = () => {
        TAB_CONTENTS.push('new sheet');
        const newValue = TAB_CONTENTS.length;
        console.log(newValue);
        setValue(newValue - 1);
    };
    return (
        <Box component={'article'} className="flex flex-col w-full h-full">
            <Box className="flex justify-between w-full h-10  bg-sky-900">
                <List className="flex text-white text-xs cursor-pointer">
                    {DASHBOARD_MENU.map((item, index) => (
                        <ListItem className="relative py-1 px-5" key={index} onClick={() => openChildMenu(index)}>
                            {item.title}
                            <List
                                ref={(el) => (ref.current[index] = el)}
                                className={`${
                                    ref.current[index] === index ? 'block' : 'hidden'
                                } absolute top-7 left-0 w-56 p-1 bg-white shadow-md z-50 text-slate-900`}
                            >
                                {item.subMenu.map((subItem, index) => (
                                    <ListItem className="hover:bg-slate-100" key={index}>
                                        {subItem}
                                    </ListItem>
                                ))}
                            </List>
                        </ListItem>
                    ))}
                </List>
                <Button className="text-white border-white text-xs " variant="outlined">
                    Publish
                </Button>
            </Box>
            <Box className="flex justify-between w-full h-10 p-1 border-b border-gray-200 ">
                <List className="flex items-center text-xs text-gray-500 cursor-pointer group-default:p-0">
                    {ICON_COMPONENTS.map((IconComponent, index) => (
                        <React.Fragment key={index}>
                            {(index === 3 && <Divider orientation="vertical" variant="middle" />) ||
                                (index === 6 && <Divider orientation="vertical" variant="middle" />)}
                            <ListItem className="p-0">
                                <Tooltip title={`${IconComponent.title}`}>
                                    <IconButton
                                        onClick={() => {
                                            openSideToolbar(IconComponent.title);
                                        }}
                                    >
                                        <IconComponent.svg />
                                    </IconButton>
                                </Tooltip>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Box>
            {/* Data sideNav */}
            <Box className="flex-1 flex h-full">
                <SideToolBar title={activeMenu} />
                <Box className="w-full overflow-x-hidden">
                    <TabContext value={value}>
                        <Box classList="p-1">
                            <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto" className="">
                                {TAB_CONTENTS.map((tab, index) => (
                                    <Tab
                                        key={index}
                                        label={tab}
                                        value={index}
                                        className=""
                                        sx={{
                                            '&.Mui-selected': {
                                                background: 'rgba(241, 245, 249, 1)',
                                            },
                                            '& .indicator': {
                                                display: 'none',
                                            },
                                        }}
                                    />
                                ))}
                                <Button className="w-10 min-w-3 text-xl" onClick={() => addTabContainer()}>
                                    +
                                </Button>
                            </TabList>
                        </Box>
                        <TabPanel value={value} className="bg-slate-100" sx={{ height: 'calc(100vh - 204px)' }}>
                            <DragnDropGrid />
                        </TabPanel>
                    </TabContext>
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardDetail;
