import { generateApiRequest } from "./generateApiRequest";
import { useContext } from "react";
import { FilterContext } from "./filterContext";

const useSearchExerciseApiEffect = () => {
    const {
        selectedEquipment,
        selectedBodyPart,
        selectedTargetMuscle,
        searchedExerciseName,
        setReceivedData,
        setCurrentPage
    } = useContext(FilterContext);

    return async () => {
        try {
            const url = generateApiRequest(
                selectedEquipment,
                searchedExerciseName,
                selectedBodyPart,
                selectedTargetMuscle
            );
            console.log("useSearchHookEffect url", url);
            const response = await fetch(url);
            const data = await response.json();
            console.log("EffectData", data);
            setCurrentPage(1);
            setReceivedData(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
};

export default useSearchExerciseApiEffect;
