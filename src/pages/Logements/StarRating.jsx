
// StarRating.js
import React from 'react';

const StarRating = ({ rating }) => {
    return (
        <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
                <i
                    key={index}
                    className={`star-rating ${index < rating ? 'filled' : ''}`}
                >
                    ★

                </i>
            ))}
        </div>
    );
}

export default StarRating;
