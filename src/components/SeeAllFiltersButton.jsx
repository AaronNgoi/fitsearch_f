import React from 'react';
import Filter from '../assets/filter.svg'


const SeeAllFiltersButton = () => {
    return (
        <button className="LightRedButton">
            <p className="WhiteBold"> See All Filters </p>
            <img src={Filter} className="FilterIcon" alt="Filter"/>
        </button>
    );
};

export default SeeAllFiltersButton;