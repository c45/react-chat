import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
	apiKey: "key",
	authDomain: "domain name",
	projectId: "project id",
	storageBucket: "storage bucket",
	messagingSenderId: "sender id",
	appId: "app id",
	measurementId: "measurement id"
});

const auth = getAuth(app);
const db = getFirestore(app);

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      auth,
      db,
    }}
  >
    <App />
  </Context.Provider>
);
