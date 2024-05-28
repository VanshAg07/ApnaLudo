import React from "react";
import Profile from '../images/profile2.png'
import './MyProfile.css';
import { GiWallet } from "react-icons/gi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaGift } from "react-icons/fa6";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { GiBattleAxe } from "react-icons/gi";
import { MdOutlineLogout } from "react-icons/md";

import { Link } from 'react-router-dom';
import HomePage from "./HomePage";


function MyProfile(){
    return (

        <div className="myprofile-container"> 
        <h1>My Profile</h1>
        <div className="img-container">
        <img className="profile-img" src={Profile} alt="" />
        <p>+91 9990999090</p>
        <p className="p-name">Name</p>
        <div className="p-wallet">
        <div> <GiWallet className="icon-green" /></div>
        <div style={{marginLeft:10}}><p>  My Wallet</p></div>
        
        </div>
        
      

    </div>
    <hr />
    <div style={{flexDirection:"row", display:"flex", padding:20}}>
    <div style={{justifyContent:"center", alignContent:"center"}}><RiMoneyRupeeCircleFill className="icon-green"/></div>
    <div style={{flexDirection:"column", display:"flex", marginLeft:10}}>
    <div>Cash Won</div>
    
    <div style={{flexDirection:"row", display:"flex"}}>
        <div ><LiaMoneyBillWaveAltSolid className="icon-green"/></div>
        <div style={{marginLeft:10}}>₹</div>
        <div >0</div>
    </div>
    </div>
        
    </div>

    <div style={{flexDirection:"row", display:"flex", padding:20}}>
    <div style={{justifyContent:"center", alignContent:"center"}}><FaGift className="referal-icon"/></div>
    <div style={{flexDirection:"column", display:"flex", marginLeft:10}}>
    <div>Total Referal Earnings </div>
    
    <div style={{flexDirection:"row", display:"flex"}}>
        <div ><LiaMoneyBillWaveAltSolid className="icon-green"/></div>
        <div style={{marginLeft:10}}>₹0</div>
        <div >Reedem</div>
    </div>
    </div>
        
    </div>

    <div style={{flexDirection:"row", display:"flex", padding:20}}>
    <div style={{justifyContent:"center", alignContent:"center"}}><GiBattleAxe className="battle-icon"/></div>
    <div style={{flexDirection:"column", display:"flex", marginLeft:10}}>
    <div>Game Played </div>
    
    <div style={{flexDirection:"row", display:"flex"}}>
        <div style={{marginLeft:10}}>0</div>
    </div>
    </div>
        
    </div>

    <hr />
    
    <div style={{flexDirection:"row", display:"flex", padding:20}}>
    <div style={{flexDirection:"column", display:"flex", marginLeft:10}}>
    <div><h2>LOG OUT </h2></div>
    <div style={{justifyContent:"center", alignContent:"center"}}>
    <Link to="/HomePage"><MdOutlineLogout className="logout-icon"/></Link>
    </div>
    
    

    </div>
        
    </div>

    
    




</div>
    
    );

};

export default MyProfile; 