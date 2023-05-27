import { generateApiRequest } from "./generateApiRequest";
import { useContext } from "react";
import { FilterContext } from "./filterContext";

const useSearchExerciseApi = () => {
    const {
        selectedEquipment,
        selectedBodyPart,
        selectedTargetMuscle,
        searchedExerciseName,
        selectSearchPage,
        isFilterPopoutOpen,
        toggleFilterPopout,
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
            console.log("useSearchHook url", url);
            const response = await fetch(url);
            const data = await response.json();
            console.log("data", data);
            selectSearchPage(true);
            if (isFilterPopoutOpen) { // Conditionally call toggleFilterPopout if available
                toggleFilterPopout();
            }
            setCurrentPage(1);
            setReceivedData(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
};

export default useSearchExerciseApi;
