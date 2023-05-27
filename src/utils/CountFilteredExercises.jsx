import { useContext, useEffect } from 'react';
import { FilterContext } from './filterContext';
import { generateApiRequest } from './generateApiRequest';

const CountFilteredExercises = () => {
    const { selectedEquipment, selectedBodyPart, selectedTargetMuscle, searchedExerciseName, setTotalExercises } = useContext(FilterContext);

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
    }, [selectedEquipment, selectedBodyPart, selectedTargetMuscle, searchedExerciseName, setTotalExercises]);


    return null;
};

export default CountFilteredExercises;
