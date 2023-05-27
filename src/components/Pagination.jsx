import React, { useContext } from 'react';
import { FilterContext } from '../utils/filterContext';
import { generateApiRequest } from '../utils/generateApiRequest';

const Pagination = ({ resultsPerPage }) => {
    const { totalExercises, selectedEquipment, searchedExerciseName, selectedBodyPart, selectedTargetMuscle, setReceivedData, currentPage, setCurrentPage } = useContext(FilterContext);


    const totalPages = Math.ceil(totalExercises / resultsPerPage);

    const handleNextPage = async () => {
        try {
            const nextOffset = currentPage * resultsPerPage;
            const url = generateApiRequest(selectedEquipment, searchedExerciseName, selectedBodyPart, selectedTargetMuscle, nextOffset);
            const response = await fetch(url);
            const data = await response.json();
            setReceivedData(data);
            setCurrentPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handlePreviousPage = async () => {
        try {
            const previousOffset = (currentPage - 2) * resultsPerPage;
            const url = generateApiRequest(selectedEquipment, searchedExerciseName, selectedBodyPart, selectedTargetMuscle, previousOffset);
            const response = await fetch(url);
            const data = await response.json();
            setReceivedData(data);
            setCurrentPage(prevPage => prevPage - 1);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='WhiteBold18 pagination-container'>
            {currentPage > 1 && (
                <div onClick={handlePreviousPage}>Previous</div>
            )}
            <div className='pagination-description'>{`${(currentPage - 1) * resultsPerPage + 1}-${Math.min(currentPage * resultsPerPage, totalExercises)} of ${totalExercises} results`}</div>
            {currentPage < totalPages && (
                <div onClick={handleNextPage}>
                    Next
                </div>
            )}
        </div>
    );
};

export default Pagination;