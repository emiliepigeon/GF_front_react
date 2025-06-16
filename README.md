# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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
