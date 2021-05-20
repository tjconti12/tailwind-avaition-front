import { useState} from 'react';
import './App.css';
import Schedule from './Components/Schedule/Schedule';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import { Route } from 'react-router';
import ImgCarousel from './Components/ImgCarousel/ImgCarousel';
import ReviewCarousel from './Components/ReviewCarousel/ReviewCarousel';
import Info from './Components/Info/Info';
import Statement from './Components/Statement/Statement';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Locations from './Components/Locations/Locations';
import Planes from './Components/Planes/Planes';
import PlaneDetail from './Components/Planes/PlaneDetail';




function App() {

  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <div className="App">
      <Banner />
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Route path="/" exact>  
        <ImgCarousel />
        <Info />
        <Statement />
        <ReviewCarousel />
      </Route>
      {/* <Route path="/schedule" component={Schedule} /> */}
      <Route path="/schedule">
        <Schedule loggedIn={loggedIn}/>
      </Route>
      <Route path="/LogIn">
        <Login setLoggedIn={setLoggedIn}/>
      </Route>
      <Route path="/signup">
        <Signup setLoggedIn={setLoggedIn}/>
      </Route>
      <Route path="/locations">
        <Locations />
      </Route>
      <Route path="/Planes" exact>
        <Planes />
      </Route>
      <Route path="/Planes/:Tail">
        <PlaneDetail />
      </Route>
      
    </div>
  );
}

export default App;
