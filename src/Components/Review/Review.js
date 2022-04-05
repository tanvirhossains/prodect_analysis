import React from 'react';
import './Review.css'


const Review = ({review}) => {
    return (
        <div className='review-container'>
            <img className='' src={review.img} alt="" />
            <h1>{review.name}</h1>
            <p>Ratings: {review.rating}</p>
            <h3>Review: {review.review}</h3>
            
        </div>
    );
};

export default Review;