import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Catalog/Catalog.js";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import CreateAccount from "./pages/CreateAccount/CreateAccount.js";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery.js";
import PasswordRecoveryCheckout from "./pages/PasswordRecovery/PasswordRecoveryCheckout.js";
import PasswordRecoveryAuthorizedChange from "./pages/PasswordRecovery/PasswordRecoveryAuthorizedChange.js";
import Team from "./pages/Team/Team";
import Friends from "./pages/Friends/Friends";
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import SignLanguage from './components/SignLanguage/SignLanguage';



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
        <Route path="/team" element={<Team />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
    <SignLanguage />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
)

