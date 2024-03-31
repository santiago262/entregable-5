import React from 'react';
import FromTrainer from '../homePages/FromTrainer';
import '../HomePages.css'; // Importa tu archivo CSS aquí

export default function HomePages() {
    return (
        <div className="home-pages-container">
            <img src="download.png" alt="" />
            <h1 className="home-pages-title">Pokedex</h1>
            <h2 className="home-pages-subtitle">Hi trainer</h2>
            <p className="home-pages-text">To see the pokemos's information tell me your trainer name</p>
            <div className="from-trainer-container">
                <FromTrainer />
            </div>
        </div>
    );
}
