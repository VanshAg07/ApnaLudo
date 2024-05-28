
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
      <Route path="/Notification" element={<Notification />} />
      <Route path="/Refer" element={<Refer />} />

      </Routes>
    </Router>
  );
}

export default App;
