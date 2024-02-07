import { Box } from '@mui/material';
import ContentsHeader from '../../components/Layout/ContentsHeader';
import React from 'react';
import myFolder from '../../assets/img/folder.svg';

const MyFolders = () => {
    return (
        <Box component={'article'}>
            <ContentsHeader title="My folders" sortButton={false} ButtonIs={true} ButtonName="New Folder" />
            <Box className="text-center [&&]:mt-9">
                <Box components="div" className="w-4/12 "></Box>
            </Box>
        </Box>
    );
};

export default MyFolders;
