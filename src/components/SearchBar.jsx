import React from 'react';
import Search from "../assets/search.svg"

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <p className="SearchText">Find Your Exercise</p>
            <img src={Search} className="SearchIcon" alt="SearchIcon" />
        </div>
    );
};

export default SearchBar;