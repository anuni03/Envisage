import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedIn === true ? <UserDetails /> : <Login />}
        />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/userDetails" element={<UserDetails />} />
      </Routes>
    </Router>

  );
}

export default App;