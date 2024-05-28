import React from "react";
import './Main.css';
import mainImage from '../images/1.png';
import mainImage1 from '../images/3.png';
import mainImage2 from '../images/4.png';
import mainImage3 from '../images/2.png';

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
