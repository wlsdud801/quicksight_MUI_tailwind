import {
    Box,
    Divider,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    List,
    ListItem,
    TextField,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import React from 'react';
import { NAV_MENU_BOTTOM, NAV_MENU_TOP } from '../../constant/menu';
import { Search } from '@mui/icons-material';
import { useRecoilState } from 'recoil';
import { navState } from '../../recoil/nav';

const SideNav = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#702F8A',
                light: '#FFEAFF',
                dark: '#612A80',
            },
        },
        components: {
            MuiListItem: {
                defaultProps: {
                    color: 'primary',
                },
                styleOverrides: {
                    root: {
                        marginTop: 3,
                        marginBottom: 3,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        '&:hover, &.active': {
                            backgroundColor: '#e9f6fb;',
                            borderLeft: '2px solid #22a0d7',
                            paddingLeft: '14px',
                        },
                    },
                },
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        marginRight: 5,
                    },
                },
            },
        },
    });
    const [nav, setNav] = useRecoilState(navState);

    const navSelectHandler = (data) => {
        setNav(data);
        console.log(data);
    };
    return (
        <ThemeProvider theme={theme}>
            <Box
                component="nav"
                sx={{
                    width: '256px',
                    minHeight: 'calc(100vh - 64px)',
                    borderRight: '1px solid lightgray',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                    <FormControl variant="standard">
                        <Input
                            id="input-with-icon-adornment"
                            endAdornment={
                                <InputAdornment position="end">
                                    <Search />
                                </InputAdornment>
                            }
                            placeholder="Find Analyses & more"
                            sx={{ '& ::placeholder': { fontSize: '0.8rem' } }}
                        />
                    </FormControl>
                </Box>

                <List
                    sx={{
                        width: '100%',
                    }}
                >
                    {NAV_MENU_TOP.map((menu) => (
                        <ListItem
                            key={menu.label}
                            data-id={menu.label}
                            onClick={() => navSelectHandler(menu.label)}
                            className={`${menu.label === nav ? 'active' : ''}`}
                        >
                            {menu.icon}
                            {menu.label}
                        </ListItem>
                    ))}
                    <Divider />
                    {NAV_MENU_BOTTOM.map((menu) => (
                        <ListItem
                            key={menu.label}
                            data-id={menu.label}
                            onClick={() => navSelectHandler(menu.label)}
                            className={`${menu.label === nav ? 'active' : ''}`}
                        >
                            {menu.icon}
                            {menu.label}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </ThemeProvider>
    );
};

export default SideNav;
