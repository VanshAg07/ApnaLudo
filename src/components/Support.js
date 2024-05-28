import React from 'react';
import supportLogo from '../images/support.jpg';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import Navbar from "./Navbar";

import './Support.css';

export const Support = () => {
  return (
    <>
    <Navbar />
    <div className="support-container">
      <div className="support-img">
        <img src={supportLogo} alt="Support" />
      </div>
      <div className="support-text">
        <h2>Support Timings Are From 9:00 AM To 9:00 PM</h2>
      </div>
      <div className="support-contact">
        <FaPhoneAlt className="icon-black" />
        <span>Contact via mobile</span>
      </div>
      <div className="support-contact">
        <IoMdMailOpen className="icon-red" />
        <span>Contact via Mail</span>
      </div>
    </div>
    </>
  );
}

