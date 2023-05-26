import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [selectedEquipment, setSelectedEquipment] = useState([]);
    const [isFilterPopoutOpen, setFilterPopoutOpen] = useState(false);

    const updateSelectedEquipment = (selected) => {
        setSelectedEquipment(selected);
    };

    const toggleFilterPopout = () => {
        setFilterPopoutOpen((prevState) => !prevState);
    };

    const value = {
        selectedEquipment,
        updateSelectedEquipment,
        isFilterPopoutOpen,
        toggleFilterPopout,
    };

    return (
        <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
    );
};
