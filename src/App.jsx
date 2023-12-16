import "./App.css";
import NavBar from "./components/navbar";
import Landing from "../landing";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/">
            <Route path="/" element={<Landing />} />
          </Route>
          <Route path="/home">
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
