import React, { useContext } from 'react';
import { FilterContext } from '../utils/filterContext';
import {handleActiveFilterRemoval} from '../utils/filterUtils';
import xIcon from "../assets/x.svg";
import useSearchExerciseApi from "../utils/useSearchExerciseApi"
import  CountFilteredExercises from "../utils/CountFilteredExercises"


const useHandleClick = (searchExerciseApi) => {
    const handleActiveFilterRemoval = async (selectedFilters, updateSelectedFilters, filter) => {
        await handleActiveFilterRemoval(selectedFilters, updateSelectedFilters, filter);
    };

    const handleClick => {
        await searchExerciseApi();
    };

    return handleClick;
};


const ActiveFilters = () => {
    const { selectedEquipment, selectedBodyPart, selectedTargetMuscle, updateSelectedEquipment, updateSelectedBodyPart, updateSelectedTargetMuscle } = useContext(FilterContext);

    const searchExerciseApi = useSearchExerciseApi();
    const handleClick = useHandleClick(searchExerciseApi);


return (
    <div className="ActiveButtonContainer ButtonContainer">
        {/*<CountFilteredExercises></CountFilteredExercises>*/}
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