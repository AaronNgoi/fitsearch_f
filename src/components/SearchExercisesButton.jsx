import React from 'react';
import useSearchExerciseApi from '../utils/useSearchExerciseApi';
import CountFilteredExercises from '../utils/CountFilteredExercises';

const SearchExercisesButton = () => {
    const searchExerciseApi = useSearchExerciseApi();

    const handleSearchClick = async () => {
        await searchExerciseApi();
    };

    return (
        <div>
            <button className="HomeSubmitButton" onClick={handleSearchClick}>
                <CountFilteredExercises/>
            </button>

        </div>
    );
};

export default SearchExercisesButton;
