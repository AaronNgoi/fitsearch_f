import React, { useContext } from 'react';
import Filter from '../assets/filter.svg';
import { FilterContext } from '../utils/filterContext';

const SeeAllFiltersButton = () => {
    const { toggleFilterPopout } = useContext(FilterContext);

    return (
        <button className="LightRedButton mobile-padding-8" onClick={toggleFilterPopout}>
            <p className="WhiteBold"> See All Filters </p>
            <img src={Filter} className="FilterIcon" alt="Filter" />
        </button>
    );
};

export default SeeAllFiltersButton;
