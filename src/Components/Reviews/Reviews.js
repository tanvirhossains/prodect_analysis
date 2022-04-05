import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews , setReviews] = useState()
    console.log(reviews)

    useEffect(() => {
        fetch('review.json')
        .then(res => res.json())
        .then(data => {setReviews(data)
        console.log(data)})
    },[])


    return (
        <div>
            <h1>review folder</h1>
           {
               reviews.map(review => <h1>{review.name}</h1>)
           }
        </div>
    );
};

export default Reviews;