import './App.css';
import Navbar from "./components/Navbar";
import Homepage from './components/Homepage';
import Footer from "./components/Footer";
import Socials from "./components/Socials";

function App() {
  return (
    <>
      <Navbar />
      <Socials />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
