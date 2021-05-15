import './App.css';
import Schedule from './Components/Schedule/Schedule';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import { Route } from 'react-router';
import ImgCarousel from './Components/ImgCarousel/ImgCarousel';
import ReviewCarousel from './Components/ReviewCarousel/ReviewCarousel';
import Info from './Components/Info/Info';
import Statement from './Components/Statement/Statement';




function App() {



  return (
    <div className="App">
      <Route path="/" exact>
        <Banner />
        <Navbar />
        <ImgCarousel />
        <Info />
        <Statement />
        <ReviewCarousel />
      </Route>
      {/* <Route path="/schedule" component={Schedule} /> */}
      <Route path="/schedule">
        <Banner />
        <Navbar />
        <Schedule />
      </Route>
    </div>
  );
}

export default App;
