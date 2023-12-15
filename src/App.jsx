import "./App.css";
import NavBar from "./components/navbar";
import Learn from "./components/learn";
import About from "./components/about";
import Docs from "./components/docs";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Learn />
            <Docs />
            <About />
            <Footer />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
