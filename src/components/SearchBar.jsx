import React, { useContext } from 'react';
import Search from "../assets/search.svg"
import { FilterContext } from '../utils/filterContext';

const SearchBar = () => {
    const { searchedExerciseName, updateSearchedExerciseName } = useContext(FilterContext);

    const handleInputChange = (event) => {
        updateSearchedExerciseName(event.target.value);
    };

    return (
        <div className="SearchBar">
            <input
                type="text"
                className="SearchText"
                value={searchedExerciseName}
                onChange={handleInputChange}
                placeholder="Find Your Exercise"
            />
            <img src={Search} className="SearchIcon" alt="SearchIcon" />
        </div>
    );
};

export default SearchBar;