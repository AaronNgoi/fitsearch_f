

export const equipmentList = [
    'Body Weight', 'Dumbbell', 'Cable', 'Barbell', 'Leverage Machine', 'Band',
    'Smith Machine', 'Kettlebell', 'Weighted', 'Stability Ball', 'Ez Barbell',
    'Sled Machine', 'Assisted', 'Medicine Ball', 'Rope', 'Roller', 'Resistance Band',
    'Bosu Ball', 'Wheel Roller', 'Olympic Barbell', 'Hammer', 'Skierg Machine', 'Upper Body Ergometer',
    'Stationary Bike', 'Tire', 'Trap Bar', 'Elliptical Machine', 'Stepmill Machine',
];

export const equipmentListSmall = [
    'Body Weight', 'Dumbbell', 'Cable', 'Barbell', 'Band', 'Weighted',
];


export const bodyPartList = [
    'Upper Arms', 'Upper Legs', 'Back', 'Waist', 'Chest',
    'Shoulders', 'Lower Legs', 'Lower Arms', 'Cardio', 'Neck',
];

export const bodyPartListSmall = [
    'Upper Arms', 'Upper Legs', 'Back', 'Waist', 'Chest',
    'Shoulders',
];

export const targetMuscleList = [
    'Abs', 'Pectorals', 'Biceps', 'Glutes', 'Delts', 'Triceps',  'Upper Back',
    'Lats', 'Calves', 'Quads', 'Forearms', 'Cardiovascular System', 'Hamstrings',
    'Spine', 'Traps', 'Adductors', 'Serratus Anterior', 'Abductors', 'Levator Scapulae',
];

export const targetMuscleListSmall = [
    'Abs', 'Pectorals', 'Biceps', 'Glutes', 'Delts', 'Triceps', 'Lats',
];


export const handleFilterSelection = (selectedFilters, updateSelectedFilters, filter) => {
    const isSelected = selectedFilters.includes(filter);

    if (isSelected) {
        const updatedSelection = selectedFilters.filter((item) => item !== filter);
        updateSelectedFilters(updatedSelection);
    } else {
        const updatedSelection = [...selectedFilters, filter];
        updateSelectedFilters(updatedSelection);
    }
};

export const handleActiveFilterRemoval = (selectedFilters, updateSelectedFilters, filter) => {
    const isSelected = selectedFilters.includes(filter);

    if (isSelected) {
        const updatedSelection = selectedFilters.filter((item) => item !== filter);
        updateSelectedFilters(updatedSelection);

    } else {
    }
};


export const resetFilterSectionSelection = (updateSelectedSection) => {
    return () => {
        updateSelectedSection([]);
    };
};