import { Box, Typography } from '@mui/material';
import React from 'react';
import ContentsHeader from '../components/Layout/ContentsHeader';
import { Timer } from '@mui/icons-material';

const Recent = () => {
    return (
        <Box component={'article'}>
            <ContentsHeader title="Recent" sortButton={true} ButtonIs={false} />
            <Box className="text-center [&&]:mt-9">
                <Timer />
                <Typography variant="h6">No recent item</Typography>
                <Typography variant="p">Items you recently used show up here.</Typography>
            </Box>
        </Box>
    );
};

export default Recent;
