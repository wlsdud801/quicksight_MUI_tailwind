import { AppBar, Box, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';

const Header = () => {
    return (
        <Box>
            <AppBar position="static" className="[&&]:bg-sky-950">
                <Toolbar>
                    <Typography variant="h5" className="[&&]:flex items-center flex-row grow " flexItem>
                        QuickSight
                        <Divider orientation="vertical" variant="middle" className="[&&]:mx-2 bg-white" flexItem />
                        <Typography>Web and Social Media Analytics analysis</Typography>
                    </Typography>
                    <IconButton color="inherit">
                        <HelpIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <PersonIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
