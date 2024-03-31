import React from 'react';


export default function ButtonPages({ start, end, setNumber }) {
    const handleAdd = () => {
        setNumber({ start: start + 20});
    };

    const handleDeduction = () => {
        if (start <= 0) {
            
        } else {
            setNumber({ start: start - 20});
        }
    };

    return (
        <div className="pagination-container">
             <button className="pagination-button" onClick={handleDeduction}>
            former
            </button>
            
            <p className="pagination-page">Page: {start}</p>
            <button className="pagination-button" onClick={handleAdd}>
               next
            </button>
           
        </div>
    );
}
