import React from 'react';
import { Box } from '@mui/material';
import ContentsHeader from '../components/Layout/ContentsHeader';
import { ANALYSIS_SORT_POINT } from '../constant/analysisSortPoint';

const Analysis = () => {
    return (
        <Box component={'article'}>
            <ContentsHeader
                title="Analysis"
                sortButton={true}
                ButtonIs={true}
                ButtonName="New analysis"
                selectMenuIs={true}
                selectMenu={ANALYSIS_SORT_POINT}
            />
        </Box>
    );
};

export default Analysis;
