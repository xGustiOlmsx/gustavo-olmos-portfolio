// importo los componentes que voy a utilizar en la app
import Home from "./componentes/Home.js";
import About from "./componentes/About";
import Portfolio from "./componentes/Portfolio";
import Contactos from "./componentes/Contactos";
import Servicios from "./componentes/Servicios";
import Nav from "./Nav";
import Descripción from "./componentes/Descripción.js";
import Footer from "./Footer";
import './App.css';
// importo las etiquetas de react router dom
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Descripción/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Servicios" element={<Servicios/>}/>
        <Route path="/Contactos" element={<Contactos/>}/>
        <Route path="/Home" element={<Navigate to="/"/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
