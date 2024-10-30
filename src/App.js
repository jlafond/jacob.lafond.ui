import './App.scss';
import { useEffect, useMemo, useState } from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Resume from "./containers/resume";
import Reviews from "./containers/reviews";
import Skills from "./containers/skills";
import NavBar from './components/navBar';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import particles from './utils/particles';
import { loadSlim } from "@tsparticles/slim";

function App() {

  const location = useLocation();

  const renderParticleInHomePage =  location.pathname === "/" || location.pathname === "/jacob.lafond.ui/";

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
      {/* particles */}

      {
        renderParticleInHomePage && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={particles} />
      }

      

      {/* navbar */}
      <NavBar/>

      {/* main content */}
      <div className='App__main-page-content'>
        <Routes>
          <Route index path="/" element={ <Home /> } />
          <Route path="/jacob.lafond.ui/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/reviews" element={ <Reviews /> } />
          <Route path="/resume" element={ <Resume /> }  />
          <Route path="/skills" element={ <Skills /> } /> 
          <Route path="/contact" element={ <Contact /> } /> 
          <Route index path="*" element={ <Home /> } />
        </Routes>
      </div>
      

    </div>
  );
}

export default App;
