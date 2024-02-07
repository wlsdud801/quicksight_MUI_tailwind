import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material';
import ContentsHeader from '../../components/Layout/ContentsHeader';
import React, { useState } from 'react';
import { DASHBOARD_SORT_POINT } from '../../constant/dashboardSortPoint';
import { CARD_CONTENTS } from '../../constant/cardContents';
import { MoreVert, Star, StarBorder } from '@mui/icons-material';
import useSelect from '../../hooks/useSelect';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const options = ['add to folder', 'delete'];

    const { selected, selectHandler } = useSelect();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();

    return (
        <Box component={'article'}>
            <ContentsHeader
                title="Dashboard"
                sortButton={true}
                ButtonIs={false}
                selectMenuIs={true}
                selectMenu={DASHBOARD_SORT_POINT}
            />
            <Box className="flex flex-wrap">
                {CARD_CONTENTS.map((card) => (
                    <Card variant="outlined" className="w-64 h-48 mx-3 my-5 relative">
                        <Chip label="Analysis" className="w-100 absolute top-2 left-2" />
                        <CardContent className="[&&]:p-0 ">
                            <CardMedia
                                className="h-36 border-b border-gray-200"
                                image="@/public/graph_example.png"
                                title="그래프 미리보기"
                            />
                            <div className="h-12 flex justify-between items-center pl-2 pr-1">
                                <Typography
                                    variant="p"
                                    className="text-sm overflow-hidden text-nowrap text-ellipsis w-43 cursor-pointer"
                                    onClick={() => navigate('DashboardDetail')}
                                >
                                    {card}
                                </Typography>
                                <CardActions className="[&&]:p-0">
                                    <IconButton className="[&&]:p-0" onClick={selectHandler}>
                                        {selected === true ? <Star /> : <StarBorder />}
                                    </IconButton>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={open ? 'long-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                        className="[&&]:p-0 [&&]:ml-0"
                                    >
                                        <MoreVert />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        {options.map((option) => (
                                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </CardActions>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Dashboard;
