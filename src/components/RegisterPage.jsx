import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Pour revenir à l'accueil
import "../styles/App.css"; // J'importe mon CSS global

function RegisterPage() {
    // Je crée trois variables d'état pour stocker les infos du formulaire
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate(); // Pour naviguer entre les pages

    // Cette fonction s'exécute quand je valide le formulaire
    function handleSubmit(e) {
        e.preventDefault(); // J'empêche la page de recharger
        // Plus tard, j'ajouterai l'appel à l'API ici
        alert(`Création de compte pour ${username} / ${email}`);
    }

    return (
        <div className="main-container">
            <h2>Créer un compte</h2>
            {/* Mon formulaire de création de compte */}
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
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} // Je mets à jour l'email
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
                    Créer un compte
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

export default RegisterPage;
