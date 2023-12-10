import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import LoggedInPage from "../src/pages/LoggedIn/LoggedInPage";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import SendEmail from "./pages/SendEmail/SendEmail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loggedin" element={<LoggedInPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/sendemail" element={<SendEmail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
