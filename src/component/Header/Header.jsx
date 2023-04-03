import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-center gap-3 text-lg font-bold text-blue-900'>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/rechart'>Rechart</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;