import React, { useContext } from 'react';
import xIcon from "../assets/x.svg";
import { FilterContext } from '../utils/filterContext';
import { resetFilterSectionSelection } from '../utils/filterUtils';


const ResetAllFiltersButton = () => {
    const {
        updateSelectedEquipment,
        updateSelectedBodyPart,
        updateSelectedTargetMuscle,
        updateSearchedExerciseName
    } = useContext(FilterContext);

    const handleResetClick = () => {
        resetFilterSectionSelection(updateSelectedEquipment)();
        resetFilterSectionSelection(updateSelectedBodyPart)();
        resetFilterSectionSelection(updateSelectedTargetMuscle)();
        updateSearchedExerciseName('');
    };

    return (
        <button className="BlackRedButton" onClick={handleResetClick}>
            <p className="WhiteBold">Reset All Filters</p>
            <img src={xIcon} className="XIcon" alt="X Icon" />
        </button>
    );
};

export default ResetAllFiltersButton;