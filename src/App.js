import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import "./App.css";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Services />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
