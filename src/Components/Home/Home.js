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


            <div className='qus-ans-div'>
                <div>
                    <h3>What is semantic tag </h3>
                    <p>
                        1.Semantic tag are those user use to describe the element clearly to the machine. <br />
                        2.This tag halps the  user to understand the importance of the ta <br />
                        3. this tag make easier to understand to the user and reader also <br />
                        4. It has greater accessibility as well as offer to the user better experience also. <br />
                        5.Example of semantic tag are: - form, article , table , footer , header, nav ,time etc
                    </p>
                </div>
                <div>
                    <h3>what is context api? </h3>
                    <p>
                        1. context api is new or update and easy way to "props drilling" <br />
                        2. context api way to globally variable passing system so that a uses can use the data from anywhere <br />
                        3. It is a feature of react api to make easy the collecting data <br />
                    </p>
                </div>
                <div>
                    <h3> Inline vs Block</h3>
                    <p>
                        1.In block height and width can increase and decrease but in Inline couldn't <br />
                        2. In Inline margin can be given but in Block not. <br />
                        3.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Home;