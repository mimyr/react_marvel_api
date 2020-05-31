import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='bg-red-700 text-white body-font '>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <Link to='/'>
                    <div className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                        <span className='ml-3 text-xl'>Marvel API</span>
                    </div>
                </Link>
                <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                    <Link to='/characters' className='mr-5 hover:text-gray-900'>
                        Characters
                    </Link>

                    <Link to='/comics' className='mr-5 hover:text-gray-900'>
                        Comics
                    </Link>

                    <Link to='/creators' className='mr-5 hover:text-gray-900'>
                        Creators
                    </Link>

                    <Link to='/events' className='mr-5 hover:text-gray-900'>
                        Events
                    </Link>

                    <Link to='/series' className='mr-5 hover:text-gray-900'>
                        Series
                    </Link>

                    <Link to='/stories' className='mr-5 hover:text-gray-900'>
                        Stories
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
