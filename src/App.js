import "./App.css";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import { Container, Row, Col, Image } from "react-bootstrap";
import About from './screens/About'
import Skills from './screens/Skills'
import Projects from './screens/Projects'
import Work from './screens/Work'
import Contact from './screens/Contact'

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    
     
     <Router>
      <Header/>
      <main className="py-3">
      <Route path="/" component={About} exact />
      <Route path="/skills" component={Skills}  />
      <Route path="/projects" component={Projects}  />
      <Route path="/resume" component={Work}  />
      <Route path="/contact" component={Contact}  />
      </main>
      <Footer />
      </Router>
    
  );
}

export default App;
