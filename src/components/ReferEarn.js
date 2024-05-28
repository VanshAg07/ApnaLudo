import React from "react";
import Refer from "../images/Refer.png";
import "./ReferAndEarn.css";

function ReferEarn() {
  return (
    <div>
      <div>
        <img src={Refer} alt="Refer image" />
      </div>
      <div>
        <h2>Earn Now Unlimited</h2>
      </div>
      <div>
        <p>Refer your friends now</p>
      </div>
      <br />
      <div>
        <h3>Your Refer Code :</h3>
      </div>
      <div>
        <p>Total Refers:0</p>
      </div>
      <div>
        <p>Total Earnings:0</p>
      </div>
      <hr />
      <div>
        <h2>Refer & Earn Rules</h2>
      </div>
      <div>
        <p>
          When your friend signs up on Apna Ludo from your referral link,
          <span>You get 1% commission on your referral's winnings.</span>
        </p>
      </div>
      <div>
        <p>
          Suppose your referral plays a battle for $10000 cash,
          <span>You get $100 cash.</span>
        </p>
      </div>
    </div>
  );
}

export default ReferEarn();
