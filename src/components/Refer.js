import React from 'react';
import ReferImg from '../images/refer-logo.jpg';
import './Refer.css';

function Refer() {
  return (
    <div className="refer-container">
      <div className="refer-img">
        <img src={ReferImg} alt="Refer" />
      </div>
      <div className="refer-content">
        <h2>Earn Now Unlimited</h2>
        Refer your friends now
        <br />
        <h3>Your Refer Code :</h3>
        <p>Total Refers: 0</p>
        <p>Total Earnings: 0</p>
        <hr />
        <h2>Refer & Earn Rules</h2>
        <p className='refer-p'>
          When your friend signs up on  Satta Matka from your referral link,<br />
          <span className='refer-p'>You get 1% commission on your referral's winnings.</span>
        </p>
        <p className='refer-p'>
          Suppose your referral plays a game for $10000 cash, <br />
          <span className='refer-p'>You get $100 cash.</span>
        </p>
      </div>
    </div>
  );
}

export default Refer;

