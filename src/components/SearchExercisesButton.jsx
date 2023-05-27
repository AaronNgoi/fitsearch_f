import React, {useContext} from 'react';
import useSearchExerciseApi from '../utils/useSearchExerciseApi';
import CountFilteredExercises from '../utils/CountFilteredExercises';
import {FilterContext} from "../utils/filterContext";

const SearchExercisesButton = () => {
    const searchExerciseApi = useSearchExerciseApi();
    const {totalExercises } = useContext(FilterContext);

    const handleSearchClick = async () => {
        await searchExerciseApi();
    };

    return (
        <div>
            <button className="HomeSubmitButton" onClick={handleSearchClick}>
                <CountFilteredExercises/>
                <p> Show {totalExercises} Exercises </p>
            </button>

        </div>
    );
};

export default SearchExercisesButton;
