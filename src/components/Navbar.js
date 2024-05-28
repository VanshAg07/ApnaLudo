import { Component } from 'react';
import logo from '../images/logo.png';
import './Navbar.css';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav>
        <div className="navbar-left">
          <div id="response" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <div>
            <img id="logo-1" src={logo} alt="logo" />
          </div>
        </div>
        <div className="menu">
          <ul id="navbar" className={this.state.clicked ? "active" : ""}>
            <li className="active">
             <Link to="/MyProfile"> My Profile</Link>
            </li>
            <li>
              <a href="">Win cash</a>
            </li>
            <li>
              <a href="">My wallet</a>
            </li>
            <li>
              <a href="">Transaction History</a>
            </li>
            <li>
             <Link to="/Refer">Refer & Earn</Link>
            </li>
            <li>
              <a href="">Referral History</a>
            </li>
            <li>
             <Link to="/Notification"> Notification</Link>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
            <div className='cash-class' style={{flexDirection:'row', display:"flex", alignContent:"center", justifyContent:"center",  }}>
              <div style={{alignContent:"center", }}>
              <FaRegMoneyBillAlt className="icon-green"/>
              </div>
              <div style={{flexDirection:'column', marginLeft:15, textAlign:"center"}}>
              <div className='cash-icon'><a href=""></a><span>Cash
            </span>
            </div>
                <div><p>₹0</p></div>
               
              </div>
              <div style={{alignContent:"center", marginLeft:20}}>+</div>
            </div>
          
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
