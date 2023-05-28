import React, { useContext, useEffect } from 'react';
import { FilterContext } from '../utils/filterContext';
import {handleActiveFilterRemoval} from '../utils/filterUtils';
import xIcon from "../assets/x.svg";
import useSearchExerciseApiEffect from "../utils/useSearchExerciseApiEffect"
import  CountFilteredExercises from "../utils/CountFilteredExercises"



const ActiveFilters = () => {
    const { selectedEquipment, selectedBodyPart, selectedTargetMuscle, updateSelectedEquipment, updateSelectedBodyPart, updateSelectedTargetMuscle, searchedExerciseName } = useContext(FilterContext);

    const searchExerciseApiEffect = useSearchExerciseApiEffect();

    useEffect(() => {
        const searchExercises = async () => {
            return await searchExerciseApiEffect();
        };

        searchExercises();
    }, [selectedEquipment, selectedBodyPart, selectedTargetMuscle, searchedExerciseName]);

    const handleClick = async (selectedFilters, updateSelectedFilters, filter) => {
        handleActiveFilterRemoval(selectedFilters, updateSelectedFilters, filter);
    };

        return (
    <div className="ActiveButtonContainer ButtonContainer">
        <CountFilteredExercises></CountFilteredExercises>
        {selectedEquipment.map((equipment) => (
            <button className="ActiveFilterButton" onClick={() => handleClick(selectedEquipment, updateSelectedEquipment, equipment)}>
                {equipment} <img src={xIcon} className="XIcon" alt="X Icon" />
            </button>
        ))}
        {selectedBodyPart.map((bodyPart) => (
            <button className="ActiveFilterButton" onClick={() => handleClick(selectedBodyPart, updateSelectedBodyPart, bodyPart)}>
                {bodyPart} <img src={xIcon} className="XIcon" alt="X Icon" />
            </button>
        ))}
        {selectedTargetMuscle.map((targetMuscle) => (
            <button className="ActiveFilterButton" onClick={() => handleClick(selectedTargetMuscle, updateSelectedTargetMuscle, targetMuscle)}>
                {targetMuscle} <img src={xIcon} className="XIcon" alt="X Icon" />
            </button>
        ))}
    </div>
);
};


export default ActiveFilters;