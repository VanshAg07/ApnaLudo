import React from "react";
import './Transaction.css';
import Image from '../images/transaction-logo.svg';

let Transaction = () => {
    return (
        <div className="transaction-container">
            <div className="noti-img"><img src={Image} alt="Notification" /></div>
            <div><h1>No Transaction Yet</h1></div>
            <div><p>Seems like you haven't done any activity yet</p></div>
        </div>
    );
}

export default Transaction;
