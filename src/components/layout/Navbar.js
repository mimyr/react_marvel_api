import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar bg-primary'>
            <h1>Marvel API</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/characters'>Characters</Link>
                </li>
                <li>
                    <Link to='/comics'>Comics</Link>
                </li>
                <li>
                    <Link to='/creators'>Creators</Link>
                </li>
                <li>
                    <Link to='/events'>Events</Link>
                </li>
                <li>
                    <Link to='/series'>Series</Link>
                </li>
                <li>
                    <Link to='/stories'>Stories</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
