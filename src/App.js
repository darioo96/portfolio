import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe';
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
    </>
  );
}

export default App;
