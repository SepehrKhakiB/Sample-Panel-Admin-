import React from 'react';
import "./SummaryPurchase.css"

const SummaryPurchase = ({ id, name, price, date }) => {
    const formatPrice = (price) => {
        const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
        const formattedPrice = price.toString()
            .replace(/\d/g, d => persianDigits[d])

        return formattedPrice;
    };

    return (
        <div className='SummaryPurchase'>
            <span>{name}</span>
            <span>{date}</span>
            <span className='SummaryPurchase-price'>{formatPrice(price)} تومان</span>
        </div>
    );
}

export default SummaryPurchase;