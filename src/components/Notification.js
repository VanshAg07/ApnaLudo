import React from "react";

import './Notification.css';

import Image from '../images/notification.png';

let Notification= ()=>{
   return(
      
<div>
   <div className="noti-img"><img src={Image} alt="" /> </div>
   <div><h1>No Transaction Yet</h1></div>
   <div><p>Seems like you haven't ny activity yet</p></div>
   
</div>
);
}

export default Notification;
