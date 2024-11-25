import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/homePage";
import { useState } from "react";
import { AuthProvider } from "./components/AuthContext";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <HomePage />
      </AuthProvider>
    </div>
  );
}
export default App;
