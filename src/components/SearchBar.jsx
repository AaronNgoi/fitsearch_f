import React, { useContext } from 'react';
import Search from "../assets/search.svg"
import { FilterContext } from '../utils/filterContext';
import useSearchExerciseApi from '../utils/useSearchExerciseApi';

const SearchBar = () => {
    const { searchedExerciseName, updateSearchedExerciseName } = useContext(FilterContext);

    const searchExerciseApi = useSearchExerciseApi();

    const handleInputChange = (event) => {
        updateSearchedExerciseName(event.target.value);
    };

    const handleSearchClick = async () => {
        await searchExerciseApi(); // Use the searchExerciseApi function from the useSearchExerciseApi hook
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
            <img src={Search} className="SearchIcon" alt="SearchIcon" onClick={handleSearchClick}/>
        </div>
    );
};

export default SearchBar;