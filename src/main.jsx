import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxr04GVoeScXJSgtcocvuGulNeCsVrGqM",
  authDomain: "primer-proyecto-8af5d.firebaseapp.com",
  projectId: "primer-proyecto-8af5d",
  storageBucket: "primer-proyecto-8af5d.appspot.com",
  messagingSenderId: "325732099663",
  appId: "1:325732099663:web:0e759e1ccd8a90acb6ac3a"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
