import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Works, Contact_Us, Services } from "./pages";
import "./assets/themify-icons/themify-icons.css";
import "./styles/App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact_us" element={<Contact_Us />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
