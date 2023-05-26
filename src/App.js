import './App.css';
import React from 'react';

import HomeText from "./components/HomeText";
import fitSearchIcon from "./assets/fitSearchIcon.webp"
import SearchBar from "./components/SearchBar";
import SeeAllFiltersButton from "./components/SeeAllFiltersButton";
import FilterPopOut from './components/FilterPopOut';
import { FilterProvider, FilterContext } from './utils/filterContext';
// import { equipmentListSmall, handleFilterSelection, resetFilterSectionSelection } from '../utils/FilterUtils';


function App() {
    const { isFilterPopoutOpen } = React.useContext(FilterContext);

    return (
        <div className="App">
            <div className="TopBar">
                <img src={fitSearchIcon} className="icon-45" alt="BrandIcon" />
                <p className="TopBarText">FitSearch</p>
            </div>
            {isFilterPopoutOpen && <FilterPopOut />}
            <HomeText />
            <SearchBar />
            <SeeAllFiltersButton />
        </div>
    );
}

function AppWrapper() {
    return (
        <FilterProvider>
            <App />
        </FilterProvider>
    );
}

export default AppWrapper;
