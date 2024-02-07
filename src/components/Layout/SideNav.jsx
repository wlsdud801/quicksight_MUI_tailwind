import { Box, Divider, FormControl, Input, InputAdornment, List, ListItem } from '@mui/material';
import React from 'react';
import { NAV_MENU_BOTTOM, NAV_MENU_TOP } from '../../constant/menu';
import { Search } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const SideNav = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const path = pathName.slice(1, pathName.length);

    const navigate = useNavigate();
    return (
        <Box component="nav" className="w-22 border-r border-gray-200">
            <Box className="flex items-center p-3">
                <FormControl variant="standard">
                    <Input
                        id="input-with-icon-adornment"
                        endAdornment={
                            <InputAdornment position="end">
                                <Search />
                            </InputAdornment>
                        }
                        placeholder="Find Analyses & more"
                    />
                </FormControl>
            </Box>

            <List className="w-full">
                {NAV_MENU_TOP.map((menu) => (
                    <ListItem
                        key={menu.label}
                        data-id={menu.label}
                        onClick={() => navigate(menu.link)}
                        className={`${
                            menu.link === path ? 'bg-sky-100 border-l-2 pl-3.5 border-sky-700' : ''
                        } text-xs cursor-pointer`}
                    >
                        <div className="mr-1">{menu.icon}</div>
                        {menu.label}
                    </ListItem>
                ))}
                <Divider />
                {NAV_MENU_BOTTOM.map((menu) => (
                    <ListItem
                        key={menu.label}
                        data-id={menu.label}
                        onClick={() => navigate(menu.link)}
                        className={`${
                            menu.link === path ? 'bg-sky-100 border-l-2 pl-3.5 border-sky-700' : ''
                        } text-xs cursor-pointer`}
                    >
                        <div className="mr-1">{menu.icon}</div>
                        {menu.label}
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default SideNav;
