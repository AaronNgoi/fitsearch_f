import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [selectedEquipment, setSelectedEquipment] = useState([]);
    const [selectedBodyPart, setSelectedBodyPart] = useState([]);
    const [selectedTargetMuscle, setSelectedTargetMuscle] = useState([]);
    const [isFilterPopoutOpen, setFilterPopoutOpen] = useState(false);
    const [searchedExerciseName, setSearchedExerciseName] = useState('');
    const [isSearchPage, setIsSearchPage] = useState(false);
    const [receivedData, setReceivedData] = useState([]);

    const updateSelectedEquipment = (selected) => {
        setSelectedEquipment(selected);
    };

    const updateSelectedBodyPart = (selected) => {
        setSelectedBodyPart(selected);
    };

    const updateSelectedTargetMuscle = (selected) => {
        setSelectedTargetMuscle(selected);
    };

    const toggleFilterPopout = () => {
        setFilterPopoutOpen((prevState) => !prevState);
    };

    const updateSearchedExerciseName = (name) => {
        setSearchedExerciseName(name);
    };

    const selectSearchPage = (value) => {
        setIsSearchPage(value);
    };

    const value = {
        selectedEquipment,
        updateSelectedEquipment,
        selectedBodyPart,
        updateSelectedBodyPart,
        selectedTargetMuscle,
        updateSelectedTargetMuscle,
        isFilterPopoutOpen,
        toggleFilterPopout,
        searchedExerciseName,
        updateSearchedExerciseName,
        isSearchPage,
        selectSearchPage,
        receivedData,
        setReceivedData,
    };

    return (
        <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
    );
};
