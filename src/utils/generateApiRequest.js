export const generateApiRequest = (selectedEquipment, searchedExerciseName, selectedBodyPart, selectedTargetMuscle, offset) => {
    let apiUrl = 'http://3.104.38.105:3000/api/exercises?';

    if (selectedEquipment.length > 0) {
        const equipmentString = selectedEquipment
            .map((equipment) => encodeURIComponent(equipment.replace(/ /g, ' ')))
            .join(',');
        apiUrl += `equipment=${equipmentString}`;
    }

    if (selectedBodyPart.length > 0) {
        const bodyPartString = selectedBodyPart
            .map((bodyPart) => encodeURIComponent(bodyPart.replace(/ /g, ' ')))
            .join(',');
        apiUrl += `&body_part=${bodyPartString}`;
    }

    if (selectedTargetMuscle.length > 0) {
        const targetMuscleString = selectedTargetMuscle
            .map((targetMuscle) => encodeURIComponent(targetMuscle.replace(/ /g, ' ')))
            .join(',');
        apiUrl += `&target=${targetMuscleString}`;
    }

    if (searchedExerciseName) {
        const encodedExerciseName = encodeURIComponent(searchedExerciseName.replace(/ /g, ' '));
        apiUrl += `&name=${encodedExerciseName}`;
    }

    if (offset) {
        apiUrl += `&offset=${offset}`;
    }

    console.log(`Final API URL: ${apiUrl}`);

    return apiUrl;
};
