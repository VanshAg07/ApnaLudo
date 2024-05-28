import React from "react";
import './Notification.css';
import Image from '../images/notifiction-icon2.png';
import Navbar from "./Navbar";

let Notification = () => {
  return (
    <>
    <Navbar />
    <div className="notification-container">
      <div className="noti-img">
        <img src={Image} alt="Notification Icon" />
      </div>
      <div>
        <h1>No Notification Yet</h1>
      </div>
      <div>
        <p>This is where your notifications will occur.</p>
      </div>
    </div>
    </>
  );
}

export default Notification;
