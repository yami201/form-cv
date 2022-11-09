// on importe l'inctance React et ReactDOM pour la declaration du react dans l'application web
import React from 'react';
import ReactDOM from 'react-dom/client';
// on importe l'element App qui contient la totatité de l'application web
import App from './App';
// on importe l'element BrowserRouter pour le gestion des deux pages (formulaire et cv)
import { BrowserRouter } from 'react-router-dom';
// on importe l'element UserProvider car on utilise le contexte pour la gestion des données de l'utilisateur
import { UserProvider } from './utils/context/user.context';
// on importe l'element ThemeProvider pour permetre à l'utilisateur ulterieurement le choix du theme du cv
import { ThemeProvider } from './utils/context/theme.context'
// on fait appele à l'element html de l'id root et on crée un root avec react
const root = ReactDOM.createRoot(document.getElementById('root'));
// on crée l'app par react à l'interieur de l'element root
root.render(
  // StricMode serre à ajouter des differents avertissements et verification dans l'app
  <React.StrictMode>
    { 
      // les acolades serrent à utiliser le js à l'interieur d'une balise React
      // BrowserRouter est l'element qui accepte l'utilisation des differents pages dans l'app react
      // UserProvider and ThemeProvider are the context providers so we need to wrap our whole app with them , the ordre doesn't mean anything because they are sepparated
    }
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
