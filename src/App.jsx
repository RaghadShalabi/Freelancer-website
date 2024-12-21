// import './App.css'
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Masthead from "./components/masthead/Masthead.jsx";
import Navbar from "./components/Navbar.jsx";
import Portfolio from "./components/Portfolio.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Masthead />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
