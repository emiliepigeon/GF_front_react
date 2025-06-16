import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Pour revenir à l'accueil
import "../styles/App.css"; // J'importe mon CSS global

function LoginPage() {
    // Je crée deux variables d'état pour stocker ce que l'utilisateur tape
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Pour naviguer entre les pages

    // Cette fonction s'exécute quand je valide le formulaire
    function handleSubmit(e) {
        e.preventDefault(); // J'empêche la page de recharger
        // Plus tard, j'ajouterai l'appel à l'API ici
        alert(`Tentative de connexion avec ${username} / ${password}`);
    }

    return (
        <div className="main-container">
            <h2>Connexion</h2>
            {/* Mon formulaire de connexion */}
            <form className="form-main" onSubmit={handleSubmit}>
                <input
                    className="input-main"
                    type="text"
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={e => setUsername(e.target.value)} // Je mets à jour le username
                    required
                />
                <input
                    className="input-main"
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={e => setPassword(e.target.value)} // Je mets à jour le password
                    required
                />
                <button className="btn-main" type="submit">
                    Se connecter
                </button>
            </form>
            {/* Bouton pour revenir à la page d'accueil */}
            <button
                className="btn-main"
                style={{ background: "#ccc", color: "#222", marginTop: 10 }}
                onClick={() => navigate("/")}
            >
                Retour à l’accueil
            </button>
        </div>
    );
}

export default LoginPage;
