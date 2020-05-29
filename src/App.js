import React from 'react';
// Components
import Navbar from './components/layout/Navbar';
import Characters from './components/characters/Characters';
// Context
import CharactersState from './context/characters/CharactersState';

import './App.css';

const App = () => {
    return (
        <CharactersState>
            <div className='App'>
                <Navbar />
                <div className='container'>
                    <Characters />
                </div>
            </div>
        </CharactersState>
    );
};

export default App;
