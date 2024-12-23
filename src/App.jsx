import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Masthead from "./components/masthead/Masthead.jsx";
import Navbar from "./components/Navbar.jsx";
import Portfolio from "./components/Portfolio.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Masthead />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<h1 style={{marginTop:"130px"}}>Page Not Found</h1>}></Route>
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
