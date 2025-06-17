------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## MA PARTIE DU README

---

# 🚀 Journal de création de mon projet React

## 📅 Introduction

Bienvenue sur mon projet React !  
Ce journal raconte toutes les étapes que j’ai suivies, en tant que débutante, pour créer une application web avec une page d’accueil, deux formulaires (connexion et création de compte), et un design responsive avec des variables CSS.

---

## 🛠️ Prérequis

- Node.js (v18+)
- npm (v8+)
- VS Code
- Un terminal Bash (pour les commandes)

---

## 📝 Étapes de création

### 1️⃣ Création du projet React

```bash
npx create-react-app .
```
- J’ai utilisé cette commande dans un dossier vide pour créer mon projet React dans ce dossier.

### 2️⃣ Lancement du projet

```bash
npm start
```
- Cette commande lance le serveur de développement et ouvre l’application sur [http://localhost:3000](http://localhost:3000).

### 3️⃣ Installation du routeur React

```bash
npm install react-router-dom
```
- J’ai installé la bibliothèque qui permet de naviguer entre différentes pages dans mon application.

### 4️⃣ Organisation du code

J’ai créé deux dossiers dans `src/` :
- `components/` : pour mes pages et composants React
- `styles/` : pour mon CSS global

---

## 📂 Architecture du projet

```
src/
├── components/
│   ├── HomePage.jsx       # Page d'accueil avec deux boutons
│   ├── LoginPage.jsx      # Formulaire de connexion
│   └── RegisterPage.jsx   # Formulaire de création de compte
├── styles/
│   └── App.css            # Fichier CSS global avec variables et styles
├── App.js                 # Point d'entrée React, gère la navigation
└── index.js               # Démarre l'application React
```

---

## 💡 Description de chaque fichier

### `components/HomePage.jsx`  
> **Page d’accueil**  
> - Affiche “Bonjour !”
> - Deux boutons : “Se connecter” et “Créer un compte”
> - Quand je clique sur un bouton, je vais vers la page correspondante

### `components/LoginPage.jsx`  
> **Formulaire de connexion**  
> - Deux champs : nom d’utilisateur et mot de passe  
> - Bouton pour se connecter (pour l’instant, affiche une alerte)  
> - Bouton “Retour à l’accueil” pour revenir à la page principale

### `components/RegisterPage.jsx`  
> **Formulaire de création de compte**  
> - Trois champs : nom d’utilisateur, email, mot de passe  
> - Bouton pour créer un compte (pour l’instant, affiche une alerte)  
> - Bouton “Retour à l’accueil” pour revenir à la page principale

### `styles/App.css`  
> **Fichier CSS global**  
> - Définit des variables CSS (`:root`) pour les couleurs et les polices  
> - Centre le conteneur principal et limite sa largeur à 1/3 de l’écran  
> - Styles pour les boutons, formulaires, titres, etc.  
> - Responsive pour les petits écrans

### `App.js`  
> **Point d’entrée de l’application**  
> - Configure la navigation entre les pages avec React Router  
> - Affiche la bonne page selon l’URL

### `index.js`  
> **Démarrage de l’application**  
> - Lance l’application React et affiche `` dans la page web

---

## 🖼️ Aperçu du résultat

- Une page d’accueil simple et responsive
- Deux boutons pour accéder aux formulaires
- Des formulaires clairs et faciles à utiliser
- Un bouton de retour sur chaque formulaire

---

## 📚 Ce que j’ai appris

- Créer un projet React avec `create-react-app`
- Organiser mon code en dossiers et fichiers
- Naviguer entre plusieurs pages avec React Router
- Utiliser des variables CSS pour personnaliser les couleurs et les polices
- Centrer et rendre responsive un conteneur principal
- Ajouter des commentaires pour mieux comprendre mon code

---

## 📦 Commandes principales utilisées

| Commande                                 | À quoi ça sert ?                                   |
|-------------------------------------------|----------------------------------------------------|
| `npx create-react-app .`                  | Créer le projet React dans le dossier courant      |
| `npm start`                               | Lancer le serveur de développement                 |
| `npm install react-router-dom`            | Installer la navigation entre pages                |

---

## 📁 Détail de l’architecture (avec commentaires)

```
src/
├── components/
│   ├── HomePage.jsx       # Page d'accueil : boutons vers login/register
│   ├── LoginPage.jsx      # Formulaire de connexion + retour accueil
│   └── RegisterPage.jsx   # Formulaire de création de compte + retour accueil
├── styles/
│   └── App.css            # Styles globaux, variables CSS, responsive
├── App.js                 # Navigation entre les pages (Router)
└── index.js               # Point de démarrage React
```

---

## 🎉 Conclusion

J’ai réussi à créer et organiser mon premier projet React, à naviguer entre plusieurs pages, et à appliquer un design moderne et responsive. 

Ce projet me servira de base pour apprendre à connecter un backend (API REST spring boot), gérer des utilisateurs, et aller plus loin avec React !

---

*Écrit avec ❤️ par une débutante motivée !*

---

**N’hésite pas à t’inspirer de ce journal pour tes propres projets !**

## 17/06/2025