
import './App.css';
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import About from './components/AboutUs';
// import BusinessAndProduct from './components/BusinessAndProduct';
// import OurGames from './components/OurGames';
// import LoginPage from './components/LoginPage';
// import MyProfile from './components/MyProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MyProfile from './components/MyProfile';
import Notification from './components/Notification';
import Refer from './components/Refer';
import Transaction from './components/Transaction';
import { Support } from './components/Support';
import ReferalHistory from './components/ReferalHistory';
import LoginPage from './components/LoginPage';

function App() {
  return (

    // <div classname='nav'>
    //    <Navbar/>
    //   <Main/>
    //   <About/>
    //  <BusinessAndProduct/>
    //  <OurGames/>
    //  <LoginPage/>

    //  <MyProfile/> 
     
    // </div>

    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/Transaction" element={<Transaction />} />
      <Route path="/Refer" element={<Refer />} />
      <Route path="/Notification" element={<Notification/>} />
      <Route path="/Support" element={<Support/>} />
      <Route path="/ReferalHistory" element={<ReferalHistory/>} />
      <Route path="/LoginPage" element={<LoginPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
