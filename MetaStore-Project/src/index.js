import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
<<<<<<< HEAD
import Catalog from "./components/Catalog/Catalog.js";
import Footer from "./components/footer/Footer";
=======
import Footer from "./components/Footer/Footer";
>>>>>>> 6e4f21affaad786d59aa94eecb938b3b2bf692a9
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import CreateAccount from "./pages/CreateAccount/CreateAccount.js";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery.js";
import PasswordRecoveryCheckout from "./pages/PasswordRecovery/PasswordRecoveryCheckout.js";
import PasswordRecoveryAuthorizedChange from "./pages/PasswordRecovery/PasswordRecoveryAuthorizedChange.js";
import Equipe from "./pages/Equipe/Equipe";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/passwordRecovery" element={<PasswordRecovery />} />
        <Route path="/passwordRecovery/checkout" element={<PasswordRecoveryCheckout />} />
        <Route path="/passwordRecovery/authorizedchange" element={<PasswordRecoveryAuthorizedChange />} />
        <Route path="/equipe" element={<Equipe />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
