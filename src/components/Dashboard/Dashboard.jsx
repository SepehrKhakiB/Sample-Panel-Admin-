import { Box } from '@mui/material';
import React from 'react';
import Summary from '../summary/summary';
import Chart from '../Chart/Chart';
import Purchases from '../Purchases/Purchases';
import BestSeller from '../bestSeller/bestSeller';
import Comments from '../comments/comments';

const Dashboard = () => {
    return (
        <Box padding="10px">
            <Summary />
            <Chart />
            <Box display="flex" gap="1rem" marginTop="1rem">
                <Comments />
                <BestSeller />
                <Purchases />
            </Box>
        </Box>
    );
}

export default Dashboard;
