import { Box, Card, CardContent, CardHeader, CardMedia, IconButton } from '@mui/material';
import ContentsHeader from '../components/Layout/ContentsHeader';
import React from 'react';
import { DASHBOARD_SORT_POINT } from '../constant/dashboardSortPoint';
import { CARD_CONTENTS } from '../constant/cardContents';
import { MoreVert } from '@mui/icons-material';

const Dashboard = () => {
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
                    <Card variant="outlined" className="w-64 h-48 mx-3 my-5">
                        <CardHeader>Analysis</CardHeader>
                        <CardContent>{card}</CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Dashboard;
