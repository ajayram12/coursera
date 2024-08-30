import "./App.css";
import Home from "./Home";
import Login from "./Login1";
import React from "react";
import SignUp from "./Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (  
      <>
        <Router>
            <div className="App">
                <Routes>
                  <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
        </>
    );
}

export default App;

