import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <br /><br />
      <About />
      <br /><br />
      <Projects />
      <br /><br />
      <Contact />
    </div>
  );
}

export default App;
