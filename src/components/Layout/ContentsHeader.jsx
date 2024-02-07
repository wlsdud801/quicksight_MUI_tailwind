import { Apps, Menu } from '@mui/icons-material';
import { Box, Button, Divider, FormControl, IconButton, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react';

const ContentsHeader = ({ title, sortButton, ButtonIs, ButtonName, selectMenuIs, selectMenu }) => {
    const [sortType, setSortType] = useState('sorting');
    const handleChange = (event) => {
        setSortType(event.target.value);
    };
    return (
        <>
            <Box component={'div'} className="flex justify-between p-3">
                <Typography variant="h5" className="[&&]:leading-10">
                    {title}
                </Typography>
                <Box component={'div'} className="flex items-center">
                    {selectMenuIs === true ? (
                        <FormControl>
                            <Select id="demo-simple-select" value={sortType} onChange={handleChange} className=" h-7">
                                {selectMenu.map((menu) => (
                                    <MenuItem key={menu} value={menu}>
                                        {menu}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ) : (
                        ''
                    )}
                    {sortButton && sortButton === true ? (
                        <>
                            <IconButton>
                                <Menu />
                            </IconButton>
                            <IconButton>
                                <Apps />
                            </IconButton>
                        </>
                    ) : (
                        ''
                    )}
                    {ButtonIs === true ? (
                        <Button variant="contained" className="ml-2 ">
                            {ButtonName}
                        </Button>
                    ) : (
                        ''
                    )}
                </Box>
            </Box>
            <Divider />
        </>
    );
};

export default ContentsHeader;
