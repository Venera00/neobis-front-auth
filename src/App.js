import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import LoggedInPage from "../src/pages/LoggedIn/LoggedInPage";
import RegistrtationPage from "./pages/Registration/RegistrtationPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loggedin" element={<LoggedInPage />} />
          <Route path="/registration" element={<RegistrtationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
