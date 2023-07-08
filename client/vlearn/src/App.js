import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path = "/" element={<Homepage/>}/>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
      
    </Router>
    </>
  );
}

export default App;
