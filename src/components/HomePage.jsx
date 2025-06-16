import React from "react";
import { useNavigate } from "react-router-dom"; // J'importe useNavigate pour changer de page
import "../styles/App.css"; // J'importe mon fichier CSS global

function HomePage() {
    const navigate = useNavigate(); // Je crée une fonction pour naviguer entre les pages

    return (
        // Ceci est mon conteneur principal centré avec le style CSS "main-container"
        <div className="main-container">
            {/* Mon titre d'accueil */}
            <h1>Bonjour !</h1>
            {/* Bouton pour aller vers la page de connexion */}
            <button className="btn-main" onClick={() => navigate("/login")}>
                Se connecter
            </button>
            {/* Bouton pour aller vers la page de création de compte */}
            <button className="btn-main" onClick={() => navigate("/register")}>
                Créer un compte
            </button>
        </div>
    );
}

export default HomePage; // J'exporte mon composant pour l'utiliser ailleurs
