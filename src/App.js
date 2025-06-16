import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // J'importe le routeur
import HomePage from "./components/HomePage"; // J'importe ma page d'accueil
import LoginPage from "./components/LoginPage"; // J'importe la page de connexion
import RegisterPage from "./components/RegisterPage"; // J'importe la page de création de compte

function App() {
  // Ici je définis les routes de mon application
  return (
    <Router>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<HomePage />} />
        {/* Page de connexion */}
        <Route path="/login" element={<LoginPage />} />
        {/* Page de création de compte */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
