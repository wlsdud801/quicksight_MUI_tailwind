import { Box } from '@mui/material';
import ContentsHeader from '../components/Layout/ContentsHeader';
import React from 'react';

const MyFolders = () => {
    return (
        <Box component={'article'}>
            <ContentsHeader title="Shared folders" sortButton={false} ButtonIs={true} ButtonName="New Folder" />
        </Box>
    );
};

export default MyFolders;
