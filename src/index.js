import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
	apiKey: "AIzaSyDS2WlZb0d2cQBFRjn6CBaxokAEx5O2dc4",
	authDomain: "chat-1d4f0.firebaseapp.com",
	projectId: "chat-1d4f0",
	storageBucket: "chat-1d4f0.appspot.com",
	messagingSenderId: "919089345270",
	appId: "1:919089345270:web:be55f0b7f97850ca5ff2d7",
	measurementId: "G-NBP8SGH7Y5"
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