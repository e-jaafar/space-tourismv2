// Import Statements
import Nav from "./Components/Nav";
import Homepage from './Components/Homepage';
import Destination from './Components/Destination';
import Crew from "./Components/Crew"
import Technology from './Components/Technology';
import './style/common.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// App Component
export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path='/' element={ <Homepage /> } />
          <Route exact path='/destination' element={ <Destination /> } />
          <Route exact path='/crew' element={ <Crew /> } />
          <Route exact path='/technology' element={ <Technology /> } />
          <Route path='*' element={ <Homepage /> } />
        </Routes>
      </div>
    </Router>
  );
}

