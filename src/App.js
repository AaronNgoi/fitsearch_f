import './App.css';
import React from 'react';

import HomeText from "./components/HomeText";
import fitSearchIcon from "./assets/fitSearchIcon.webp"
import SearchBar from "./components/SearchBar";
import SeeAllFiltersButton from "./components/SeeAllFiltersButton";
import FilterPopOut from './components/FilterPopOut';
import { FilterProvider, FilterContext } from './utils/filterContext';
import HomeQuickFilter from "./components/HomeQuickFilter";


function App() {
    const { isFilterPopoutOpen, isSearchPage, receivedData, selectSearchPage } = React.useContext(FilterContext);

    return (
        <div className="App">
            {isFilterPopoutOpen && <FilterPopOut />}

            {!isSearchPage && (
                <div className="LandingPage">
                    <div className="TopBar">
                        <img src={fitSearchIcon} className="icon-45" alt="BrandIcon" />
                        <p className="TopBarText">FitSearch</p>
                    </div>
                    <HomeText />
                    <SearchBar />
                    <SeeAllFiltersButton />
                    <HomeQuickFilter />
                </div>
            )}

            {isSearchPage && (

                <div className="SearchPage">
                    <div className="XXX">
                        <div className="TopBar">
                            <img src={fitSearchIcon} className="icon-45" alt="BrandIcon" onClick={() => selectSearchPage(false)}/>
                            <SearchBar />
                        </div>
                        <SeeAllFiltersButton />
                        {receivedData.map((exercise) => (
                            <div key={exercise.id}>
                                <p>{exercise.name}</p>
                                <p>{exercise.equipment}</p>
                            </div>
                        ))}

                    </div>
                </div>


            )}

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
