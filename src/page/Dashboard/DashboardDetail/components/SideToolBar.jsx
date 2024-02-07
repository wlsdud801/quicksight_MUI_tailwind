import { Close, CloudDone } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { sideToolbarState } from '../../../../recoil/sideToolbar';

const SideToolBar_Data = ({ title, children }) => {
    const [open, setOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useRecoilState(sideToolbarState);
    const closeHandler = () => {
        setActiveMenu(null);
    };
    return (
        <Box
            className={`border-r border-gray-200 max-w-xs min-w-52 overflow-x-hidden transition-all`}
            style={{
                width: activeMenu !== null ? '16.666667%' : '0',
                padding: activeMenu !== null ? '1rem' : '0',
                minWidth: activeMenu !== null ? '18rem' : '0',
            }}
        >
            <div className={`flex justify-between items-center ${open ? 'block' : 'hidden'}`}>
                <Typography variant="h6">
                    <CloudDone className="mr-1 translate-y-1" />
                    {title}
                </Typography>
                <IconButton onClick={() => closeHandler()}>
                    <Close />
                </IconButton>
            </div>
            {children}
        </Box>
    );
};

export default SideToolBar_Data;
