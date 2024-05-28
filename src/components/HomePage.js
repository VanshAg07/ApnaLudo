import '../App.css';
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from '../components/AboutUs';
import BusinessAndProduct from '../components/BusinessAndProduct';
import OurGames from '../components/OurGames';
import LoginPage from '../components/LoginPage';


function HomePage() {
    return (
  
      <div classname='nav'>
         <Navbar/>
        <Main/>
        <About/>
       <BusinessAndProduct/>
       <OurGames/>
       <LoginPage/>
       
      </div>
    );
    }

    export default HomePage;