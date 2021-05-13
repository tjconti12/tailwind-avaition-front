import './App.css';
import Schedule from './Components/Schedule/Schedule';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import { Route } from 'react-router';




function App() {



  return (
    <div className="App">
      <Route path="/">
        <Banner />
        <Navbar />
      </Route>
      <Route path="/calendar" component={Schedule} />
    </div>
  );
}

export default App;
