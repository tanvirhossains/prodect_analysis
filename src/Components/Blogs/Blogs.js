import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h3>Blogs commponent</h3>



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

export default Blogs;