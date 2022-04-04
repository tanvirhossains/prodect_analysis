import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to='/dashbaord'>Dash Board</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;