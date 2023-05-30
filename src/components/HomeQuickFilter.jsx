import {
    equipmentListSmall,
    bodyPartListSmall,
    targetMuscleListSmall,
    handleFilterSelection,
    resetFilterSectionSelection,
} from "../utils/filterUtils";
import xIcon from "../assets/x.svg";
import React, {useContext} from "react";
import {FilterContext} from "../utils/filterContext";

const HomeQuickFilter = () => {

    const { selectedEquipment, updateSelectedEquipment, selectedBodyPart, updateSelectedBodyPart, selectedTargetMuscle, updateSelectedTargetMuscle } = useContext(FilterContext);

    return(
        <>
        <div className="FilterSection ">
            <div className="FilterSectionHeader">
                <div className="WhiteBold18">Equipment</div>
                <button className="BlackRedButton" onClick={resetFilterSectionSelection(updateSelectedEquipment)}>
                    <p className="WhiteBold">Reset Section</p>
                    <img src={xIcon} className="XIcon" alt="X Icon" />
                </button>
            </div>
            <div className="ButtonContainer ">
                {equipmentListSmall.map((equipment) => (
                    <button
                        key={equipment}
                        className={selectedEquipment.includes(equipment) ? 'ActiveFilterButton text-sm' : 'FilterButton text-sm'}
                        onClick={() => handleFilterSelection(selectedEquipment, updateSelectedEquipment, equipment)}
                    >
                        {equipment}
                    </button>
                ))}
            </div>
        </div>

            <div className="FilterSection ">
                <div className="FilterSectionHeader">
                    <div className="WhiteBold18">Body Part</div>
                    <button className="BlackRedButton" onClick={resetFilterSectionSelection(updateSelectedBodyPart)}>
                        <p className="WhiteBold">Reset Section</p>
                        <img src={xIcon} className="XIcon" alt="X Icon" />
                    </button>
                </div>
                <div className="ButtonContainer ">
                    {bodyPartListSmall.map((bodyPart) => (
                        <button
                            key={bodyPart}
                            className={selectedBodyPart.includes(bodyPart) ? 'ActiveFilterButton text-sm' : 'FilterButton text-sm'}
                            onClick={() => handleFilterSelection(selectedBodyPart, updateSelectedBodyPart, bodyPart)}
                        >
                            {bodyPart}
                        </button>
                    ))}
                </div>
            </div>


            <div className="FilterSection ">
                <div className="FilterSectionHeader">
                    <div className="WhiteBold18">Target Muscle</div>
                    <button className="BlackRedButton" onClick={resetFilterSectionSelection(updateSelectedTargetMuscle)}>
                        <p className="WhiteBold">Reset Section</p>
                        <img src={xIcon} className="XIcon" alt="X Icon" />
                    </button>
                </div>
                <div className="ButtonContainer ">
                    {targetMuscleListSmall.map((targetMuscle) => (
                        <button
                            key={targetMuscle}
                            className={selectedTargetMuscle.includes(targetMuscle) ? 'ActiveFilterButton text-sm' : 'FilterButton text-sm'}
                            onClick={() => handleFilterSelection(selectedTargetMuscle, updateSelectedTargetMuscle, targetMuscle)}
                        >
                            {targetMuscle}
                        </button>
                    ))}
                </div>
            </div>


        </>
    );
};

export default HomeQuickFilter;