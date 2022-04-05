import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1>Well come to the product home page!!! </h1>

            <div className=' bike-info'>
                <img src="https://static.autox.com/uploads/bikes/2021/08/indian-chief-bobber-dark-horse.jpg" alt="" />

                <div className='bike-detail'>
                    <h1><span className='span1'>  Best bike forever </span><br /> <span className='span2'>For You</span></h1>

                    <p>Honda Hornet 2.0 is a street bike available at a starting price of Rs. 1,33,521 in India. It is available in only 1 variant and 5 colours. The Honda Hornet 2.0 is powered by 184.4cc BS6 engine which develops a power of 17.03 bhp and a torque of 16.1 Nm. </p>

                    <button>Buy Now</button>
                </div>


            </div>

            <h2 >Customer Reviews (3) </h2>

            <Link className='all-review-button' to="/reviews"> See All Reviws</Link>   

        </div>
    );
};

export default Home;