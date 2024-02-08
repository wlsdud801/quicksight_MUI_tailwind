import { Box, Typography } from '@mui/material';
import React from 'react';
import ContentsHeader from '../../components/Layout/ContentsHeader';
import { Star } from '@mui/icons-material';

const Favorite = () => {
    return (
        <Box component={'article'}>
            <ContentsHeader title="Favorite" sortButton={true} ButtonIs={true} ButtonName="add Favorite" />
            <Box className="text-center [&&]:mt-9">
                <Star />
                <Typography variant="h6">No favorites</Typography>
                <Typography variant="p">사슴 Favorite items want easliy find later</Typography>
            </Box>
        </Box>
    );
};

export default Favorite;
