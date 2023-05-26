import React, { useContext } from 'react';
import xIcon from "../assets/x.svg"
import { FilterContext } from '../utils/filterContext';
import { equipmentList, handleFilterSelection, resetFilterSectionSelection } from '../utils/filterUtils';


const FilterPopOut = () => {
    const { toggleFilterPopout } = useContext(FilterContext);
    const { selectedEquipment, updateSelectedEquipment } = useContext(FilterContext);


    return (
        <div className="FilterPopOut">
            <div className="FilterPadding">
                <div className="FilterPopOutHeader">
                    <button className="BlackRedButton" onClick="">
                        <p className="WhiteBold">Reset All</p>
                        <img src={xIcon} className="XIcon" alt="X Icon" />
                    </button>

                    <button className="LightRedButton" onClick={toggleFilterPopout}>
                        <p className="WhiteBold">Close Filters</p>
                        <img src={xIcon} className="XIcon" alt="X Icon" />
                    </button>
                </div>
                <div className="FilterSection">
                    <div className="FilterSectionHeader">
                        <div className="WhiteBold18">Equipment</div>
                        <button className="BlackRedButton" onClick={resetFilterSectionSelection(updateSelectedEquipment)}>
                            <p className="WhiteBold">Reset Section</p>
                            <img src={xIcon} className="XIcon" alt="X Icon" />
                        </button>
                    </div>
                    <div className="ButtonContainer">
                        {equipmentList.map((equipment) => (
                            <button
                                key={equipment}
                                className={selectedEquipment.includes(equipment) ? 'ActiveFilterButton' : 'FilterButton'}
                                onClick={() => handleFilterSelection(selectedEquipment, updateSelectedEquipment, equipment)}
                            >
                                {equipment}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPopOut;
