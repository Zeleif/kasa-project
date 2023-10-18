import React from 'react';

const StarRating = ({ rating }) => {
    return (
        <>
            {Array.from({ length: 5 }, (_, index) => (
                <i
                    key={index}
                    className={`star-rating ${index < rating ? 'filled' : ''}`}
                >
                    ★

                </i>
            ))}
        </>
    );
}

export default StarRating;
