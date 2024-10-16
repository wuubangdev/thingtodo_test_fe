// app/Spinner.js
'use client';

import React from 'react';
import './spinner.css'; // Import CSS cho spinner

const Spinner = () => {
    return (
        <div className="spinner-overlay">
            <div className="spinner"></div>
        </div>
    );
};

export default Spinner;
