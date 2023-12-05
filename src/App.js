import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import LoggedInPage from "../src/pages/LoggedIn/LoggedInPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/loggedin" element={<LoggedInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
