import { AppBar, Box, Divider, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import { AccountCircle } from '@mui/icons-material';

const Header = () => {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <AppBar position="static" className="w-full bg-sky-950">
                <Toolbar>
                    <Typography variant="h5" className="[&&]:flex items-center flex-row grow text-wh">
                        <Link href="/" className="text-white">
                            QuickSight
                        </Link>
                        <Divider orientation="vertical" variant="middle" className="[&&]:mx-2 bg-white" />
                        <Typography>Web and Social Media Analytics analysis</Typography>
                    </Typography>
                    <IconButton color="inherit">
                        <HelpIcon />
                    </IconButton>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}

                    {/* <IconButton color="inherit">
                        <PersonIcon />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
