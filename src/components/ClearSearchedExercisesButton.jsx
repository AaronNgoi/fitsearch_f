import React, { useContext } from 'react';
import xIcon from "../assets/x.svg";
import { FilterContext } from '../utils/filterContext';
import { resetFilterSectionSelection } from '../utils/filterUtils';


const ClearSearchedExercisesButton = () => {
    const {
        updateSelectedEquipment,
        updateSelectedBodyPart,
        updateSelectedTargetMuscle,
        updateSearchedExerciseName,
        setReceivedData,
        setCurrentPage,
        totalExercises,
        setTotalExercises
    } = useContext(FilterContext);

    const defaultData = [
        {
            "id": 1,
            "name": "3/4 Sit-Up",
            "body_part": "Waist",
            "equipment": "Body Weight",
            "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
            "target": "Abs"
        },
        {
            "id": 2,
            "name": "45-Degree Side Bend",
            "body_part": "Waist",
            "equipment": "Body Weight",
            "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
            "target": "Abs"
        },
        {
            "id": 3,
            "name": "Air Bike",
            "body_part": "Waist",
            "equipment": "Body Weight",
            "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0003.gif",
            "target": "Abs"
        },
        {
            "id": 6,
            "name": "Alternate Heel Touchers",
            "body_part": "Waist",
            "equipment": "Body Weight",
            "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
            "target": "Abs"
        },
        {
            "id": 7,
            "name": "Alternate Lateral Pulldown",
            "body_part": "Back",
            "equipment": "Cable",
            "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
            "target": "Lats"
        },
        {
            "id": 9,
            "name": "Assisted Chest Dip (Kneeling)",
            "body_part": "Chest",
            "equipment": "Leverage Machine",
            "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0009.gif",
            "target": "Pectorals"
        },
        {
            "id": 10,
            "name": "Assisted Hanging Knee Raise With Throw Down",
            "body_part": "Waist",
            "equipment": "Assisted",
            "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0010.gif",
            "target": "Abs"
        },
        {
            "id": 11,
            "name": "Assisted Hanging Knee Raise",
            "body_part": "Waist",
            "equipment": "Assisted",
            "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0011.gif",
            "target": "Abs"
        },
        {
            "id": 12,
            "name": "Assisted Lying Leg Raise With Lateral Throw Down",
            "body_part": "Waist",
            "equipment": "Assisted",
            "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0012.gif",
            "target": "Abs"
        },
        {
            "id": 13,
            "name": "Assisted Lying Leg Raise With Throw Down",
            "body_part": "Waist",
            "equipment": "Assisted",
            "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0013.gif",
            "target": "Abs"
        }
    ]


    const handleResetClick = () => {
        resetFilterSectionSelection(updateSelectedEquipment)();
        resetFilterSectionSelection(updateSelectedBodyPart)();
        resetFilterSectionSelection(updateSelectedTargetMuscle)();
        updateSearchedExerciseName('');
        setCurrentPage(1);
        setReceivedData(defaultData);
        setTotalExercises(1327);
    };

    return (
        <button className="BlackRedButton" onClick={handleResetClick}>
            <p className="WhiteBold">Clear {totalExercises} Exercises</p>
            <img src={xIcon} className="XIcon" alt="X Icon" />
        </button>
    );
};

export default ClearSearchedExercisesButton;