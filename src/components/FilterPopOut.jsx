import React from 'react';
import fitSearchIcon from "./assets/fitSearchIcon.webp"
import SearchBar from "./SearchBar";

const FilterPopOut = () => {
    return (
        <div className="FilterPopOut">
            <div className="">
                <img src={fitSearchIcon} className="icon-45" alt="BrandIcon"></img>
            {/*    close filters */}
            </div>
            <SearchBar></SearchBar>
            {/*remove filter button*/}
        </div>
    );
};

export default FilterPopOut;