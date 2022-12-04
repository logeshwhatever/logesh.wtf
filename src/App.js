// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import Writings from "./components/Writings";
import About from "./components/About";
import Work from "./components/Work";
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    
    {/* <button ></button> */}
      <Router basename="logesh.wtf">
      <Navbar/>   
        <Routes>
          <Route exact path="/Work" element={<Work />}></Route> 
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Writings" element={<Writings />}></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;

