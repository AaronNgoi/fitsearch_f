import React, { useContext } from 'react';
import xIcon from "../assets/x.svg"
import { FilterContext } from '../utils/filterContext';
import { equipmentList, bodyPartList, targetMuscleList, handleFilterSelection, resetFilterSectionSelection } from '../utils/filterUtils';
import {generateApiRequest} from "../utils/generateApiRequest";


const FilterPopOut = () => {
    const { toggleFilterPopout, selectSearchPage, setReceivedData, } = useContext(FilterContext);
    const { selectedEquipment, updateSelectedEquipment, selectedBodyPart, updateSelectedBodyPart, selectedTargetMuscle, updateSelectedTargetMuscle, searchedExerciseName  } = useContext(FilterContext);

    const handleButtonClick = async () => {
        try {
            const url = generateApiRequest(selectedEquipment, searchedExerciseName, selectedBodyPart, selectedTargetMuscle);
        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);
        selectSearchPage(true);
        toggleFilterPopout();
        setReceivedData(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

    return (
        <div className="FilterPopOut">
            <div className="FilterPadding">
                <div className="FilterPopOutHeader">
                    <button className="BlackRedButton" onClick={() => {
                        resetFilterSectionSelection(updateSelectedEquipment)();
                        resetFilterSectionSelection(updateSelectedBodyPart)();
                        resetFilterSectionSelection(updateSelectedTargetMuscle)();
                    }}>
                        <p className="WhiteBold">Reset All</p>
                        <img src={xIcon} className="XIcon" alt="X Icon" />
                    </button>

                    <button className="LightRedButton" onClick={toggleFilterPopout}>
                        <p className="WhiteBold">Close Filters</p>
                        <img src={xIcon} className="XIcon" alt="X Icon" />
                    </button>
                </div>
                <div className="PopUpFilterSection">
                    <div className="FilterSectionHeader">
                        <div className="WhiteBold18">Equipment</div>
                        <button className="BlackRedButton" onClick={resetFilterSectionSelection(updateSelectedEquipment)}>
                            <p className="WhiteBold">Reset Section</p>
                            <img src={xIcon} className="XIcon" alt="X Icon" />
                        </button>
                    </div>
                    <div className="ButtonContainer">
                        {equipmentList.map((equipment) => (
                            <button
                                key={equipment}
                                className={selectedEquipment.includes(equipment) ? 'ActiveFilterButton' : 'FilterButton'}
                                onClick={() => handleFilterSelection(selectedEquipment, updateSelectedEquipment, equipment)}
                            >
                                {equipment}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="PopUpFilterSection">
                    <div className="FilterSectionHeader">
                        <div className="WhiteBold18">Body Part</div>
                        <button className="BlackRedButton" onClick={resetFilterSectionSelection(updateSelectedBodyPart)}>
                            <p className="WhiteBold">Reset Section</p>
                            <img src={xIcon} className="XIcon" alt="X Icon" />
                        </button>
                    </div>
                    <div className="ButtonContainer">
                        {bodyPartList.map((bodyPart) => (
                            <button
                                key={bodyPart}
                                className={selectedBodyPart.includes(bodyPart) ? 'ActiveFilterButton' : 'FilterButton'}
                                onClick={() => handleFilterSelection(selectedBodyPart, updateSelectedBodyPart, bodyPart)}
                            >
                                {bodyPart}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="PopUpFilterSection">
                    <div className="FilterSectionHeader">
                        <div className="WhiteBold18">Target Muscle</div>
                        <button className="BlackRedButton" onClick={resetFilterSectionSelection(updateSelectedTargetMuscle)}>
                            <p className="WhiteBold">Reset Section</p>
                            <img src={xIcon} className="XIcon" alt="X Icon" />
                        </button>
                    </div>
                    <div className="ButtonContainer">
                        {targetMuscleList.map((targetMuscle) => (
                            <button
                                key={targetMuscle}
                                className={selectedTargetMuscle.includes(targetMuscle) ? 'ActiveFilterButton' : 'FilterButton'}
                                onClick={() => handleFilterSelection(selectedTargetMuscle, updateSelectedTargetMuscle, targetMuscle)}
                            >
                                {targetMuscle}
                            </button>
                        ))}
                    </div>
                </div>



            </div>


            <div className="PopOutSubmitButton" onClick={handleButtonClick}>
                Show {"X"} results
            </div>

        </div>
    );
};

export default FilterPopOut;
