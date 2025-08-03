import React from 'react';
import "./Purchases.css"
import { Box } from '@mui/material';
import SummaryPurchase from '../SummaryPurchase/SummaryPurchase';
import { PurchasesUser } from '../../../data/db';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Purchases = () => {
    return (
        <Box width="25%" color="var(--text)">
            <p className='Purchases-title'><ShoppingCartIcon /><span>خرید ها</span></p>
            <Box
                display="flex"
                gap="10px"
                flexDirection="column"
                marginTop="10px"
                className="purchases-list-container"
            >
                {PurchasesUser.map((data, index) => (
                    <SummaryPurchase {...data} key={index} />
                ))}
            </Box>
        </Box>
    );
}

export default Purchases;