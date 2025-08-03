import React from 'react';
import "./bestSeller.css"
import { Box } from '@mui/material';
import { PieChart } from '@mui/x-charts';

const BestSeller = () => {
    return (
        <div className='BestSeller'>
            <p>پر فروش ترین محصولات</p>
            <Box>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 60, label: 'iPhone 16 CH' },
                                { id: 1, value: 100, label: 'IdeaPad Slim 3' },
                                { id: 2, value: 130, label: 'Galaxy Tab A9-4G' },
                            ],
                        },
                    ]}
                    width={200}
                    height={200}
                />
            </Box>
        </div>
    );
}

export default BestSeller;