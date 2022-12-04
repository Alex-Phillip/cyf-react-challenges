import React from 'react';
import "./App.css";
import BabyNames from './BabyNames';
import SearchBar from './SearchBar';

const App = () => {
    return (
        <div>
            <SearchBar />
            <BabyNames />
        </div>
    );
};

export default App;