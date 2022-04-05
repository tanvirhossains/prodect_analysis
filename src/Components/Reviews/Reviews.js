import React, { useEffect, useState } from 'react'
import Review from '../Review/Review';
import './Reviews.css'


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <div>
            <h1>Well come to the customer review!!!!!!</h1>
            <div className='reviews'>
                {
                    reviews.map(value => <Review
                        key={value.id}
                        review={value}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;