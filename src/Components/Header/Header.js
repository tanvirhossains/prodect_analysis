import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (


        <div className='link'>
            <Link className='Link'  to="/home">Home</Link>
            <Link className='Link' to="/reviews">Reviews</Link>
            <Link className='Link' to='/dashboard'>Dash Board</Link>
            <Link className='Link' to='/blogs'>Blogs</Link>
            <Link className='Link' to='/about'>About</Link>

           
        </div>
    );
};

export default Header;