import React from "react";
import './Main.css';
import mainImage from '../images/main-image3.jpeg';
import mainImage1 from '../images/main-image4.jpeg';
import mainImage2 from '../images/main-image5.jpeg';
import mainImage3 from '../images/main-image6.jpeg';

function Main() {
    return (
        <div id="wrapper">
            <h2>Our Games</h2>
            <div className="image-row">
                <img className="main-img" src={mainImage} alt="Main" />
                <img className="main-img" src={mainImage1} alt="Main" />
            </div>
            <div className="image-row">
                <img className="main-img" src={mainImage2} alt="Main" />
                <img className="main-img" src={mainImage3} alt="Main" />
            </div>
        </div>
    );
}

export default Main;
