import './App.css';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
import Herramientas from './Components/Herramientas';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Proyectos from './Components/Proyectos';


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Proyectos/>
      <Herramientas/>
      <Footer/>
    </>
  );
}

export default App;
