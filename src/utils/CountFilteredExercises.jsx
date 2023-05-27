import { useContext, useEffect, useState } from 'react';
import { FilterContext } from './filterContext';
import { generateApiRequest } from './generateApiRequest';

const CountFilteredExercises = () => {
    const { selectedEquipment, selectedBodyPart, selectedTargetMuscle, searchedExerciseName } = useContext(FilterContext);
    const [totalExercises, setTotalExercises] = useState(1327); // Default total exercise count

    useEffect(() => {
        (async () => {
            const fetchFilteredExerciseCount = async () => {
                const url = generateApiRequest(selectedEquipment, searchedExerciseName, selectedBodyPart, selectedTargetMuscle);
                try {
                    const urlWithExtraLimit = `${url}&limit=1327`;
                    const response = await fetch(urlWithExtraLimit);
                    const data = await response.json();
                    const count = data.length;
                    setTotalExercises(count);
                } catch (error) {
                    console.error('Error:', error);
                }
            };

            await fetchFilteredExerciseCount();
        })();
    }, [selectedEquipment, selectedBodyPart, selectedTargetMuscle, searchedExerciseName]);


    return <p> Show {totalExercises} Exercises </p>;
};

export default CountFilteredExercises;
