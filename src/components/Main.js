import React from "react";
import './Main.css';
import mainImage from '../images/main-image1.jpg';

function Main() {
    return (
        <div id="wrapper">
            <h2>Our Games</h2>
            <div className="image-row">
                <img className="main-img" src={mainImage} alt="Main" />
                <img className="main-img" src={mainImage} alt="Main" />
            </div>
            <div className="image-row">
                <img className="main-img" src={mainImage} alt="Main" />
                <img className="main-img" src={mainImage} alt="Main" />
            </div>
        </div>
    );
}

export default Main;
