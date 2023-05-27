import './App.css';
import React, {useState} from 'react';

import HomeText from "./components/HomeText";
import fitSearchIcon from "./assets/fitSearchIcon.webp"
import SearchBar from "./components/SearchBar";
import SeeAllFiltersButton from "./components/SeeAllFiltersButton";
import FilterPopOut from './components/FilterPopOut';
import { FilterProvider, FilterContext } from './utils/filterContext';
import HomeQuickFilter from "./components/HomeQuickFilter";
import ResetAllFiltersButton from "./components/ResetAllFiltersButton";
import SearchExercisesButton from "./components/SearchExercisesButton";
import seeIcon from './assets/seeIcon.svg'
import shrink from './assets/shrink.svg'
import bodyIcon from './assets/bodyIcon.webp'
import target from './assets/target.svg'
import Pagination from "./components/Pagination";
import ClearSearchedExercisesButton from "./components/ClearSearchedExercisesButton";
import ActiveFilters from "./components/ActiveFilterContainer";


function App() {
    const { isFilterPopoutOpen, isSearchPage, receivedData, selectSearchPage, totalExercises } = React.useContext(FilterContext);
    const [expandedExercises, setExpandedExercises] = useState([]);

    const toggleExpandExercise = (exerciseId) => {
        if (expandedExercises.includes(exerciseId)) {
            setExpandedExercises(expandedExercises.filter((id) => id !== exerciseId));
        } else {
            setExpandedExercises([...expandedExercises, exerciseId]);
        }
    };

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
                    <div className="FilterSectionHeader">
                    <SeeAllFiltersButton />
                    <ResetAllFiltersButton/>
                    </div>
                    <HomeQuickFilter />
                    <SearchExercisesButton />
                </div>
            )}

            {isSearchPage && (

                <div className="SearchPage">
                    <div className="XXX">
                        <div className="TopBar">
                            <img src={fitSearchIcon} className="icon-45 mr-4px" alt="BrandIcon" onClick={() => selectSearchPage(false)}/>
                            <SearchBar />
                        </div>
                        <div className='SearchedTopButtons'>
                        <SeeAllFiltersButton />
                            {totalExercises < 1327 && <ClearSearchedExercisesButton />}
                        </div>

                        <div>
                            <ActiveFilters/>
                        </div>
                        <Pagination resultsPerPage={10} />
                        <div className='exerciseComponentContainer'>
                        {receivedData.map((exercise) => (
                            <div key={exercise.id} className='exerciseComponent'>
                                <div className='shrunken'>
                                <div className='text'>
                                <div className='HeaderText'>{exercise.name} </div>
                                <div className='SubText'>{exercise.equipment}</div>
                                </div>
                                <div onClick={() => toggleExpandExercise(exercise.id)}>
                                    {expandedExercises.includes(exercise.id) ? (
                                        <img src={shrink} alt="Shrink Icon" className='exerciseIconSmall'/>
                                    ) : (
                                        <img src={seeIcon} alt="See Icon"  className='exerciseIcon'/>
                                    )}
                                </div>
                                </div>
                                {expandedExercises.includes(exercise.id) && (
                                    <div className='ExpandedSection'>
                                        <img src={exercise.gif_url} alt="Exercise GIF" className='gifImage'/>
                                        <div className='BottomStats'>
                                        <div className='StatGroup'>
                                        <img src={bodyIcon} alt="Body Part Icon" className='exerciseIconSmall'/>

                                        <div className='StatText'> {exercise.body_part}</div>
                                        </div>
                                        <div className='StatGroup'>
                                        <img src={target} alt="Target Muscle Icon" className='exerciseIconSmall'/>
                                        <div className='StatText'> {exercise.target}</div>
                                        </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        ))}

                        </div>
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
