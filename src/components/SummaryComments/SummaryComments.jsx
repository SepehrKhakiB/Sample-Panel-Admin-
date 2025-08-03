import React from 'react';
import "./SummaryComments.css"

const SummaryComments = ({ name, rating }) => {
    // تابع برای نمایش شکلک بر اساس امتیاز
    const renderRatingEmoji = (rating) => {
        switch (rating) {
            case 1:
                return '😠';
            case 2:
                return '🙁';
            case 3:
                return '😐';
            case 4:
                return '🙂';
            case 5:
                return '😍';
            default:
                return '⭐';
        }
    };

    return (
        <div className='SummaryComments'>
            <span className="comment-name">{name}</span>
            <span className="comment-rating">
                {renderRatingEmoji(rating)} (امتیاز: {rating}/5)
            </span>
        </div>
    );
};

export default SummaryComments;