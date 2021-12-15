import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import CreateAccount from "./pages/CreateAccount/CreateAccount.js";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery.js";
import PasswordRecoveryCheckout from "./pages/PasswordRecovery/PasswordRecoveryCheckout.js";
import PasswordRecoveryAuthorizedChange from "./pages/PasswordRecovery/PasswordRecoveryAuthorizedChange.js";
import PasswordChangePassword from "./pages/PasswordRecovery/PasswordChangePassword.js";
import Team from "./pages/Team/Team";
import Friends from "./pages/Friends/Friends";
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import SignLanguage from './components/SignLanguage/SignLanguage';
import SalesDescription from './pages/Sales/SalesDescription.js';
import SalesMetaverse from './pages/Sales/SalesMetaverse.js';
import SalesCategories from './pages/Sales/SalesCategories.js';
import SalesPrice from './pages/Sales/SalesPrice.js';
import Myaccount from './pages/Myaccount/Myaccount.js';
import ArrowUp from './components/ArrowUp/ArrowUp';
import Modal3D from './pages/Modal3D/Modal3D.js';
import Search from './pages/Search/Search.js';
import RecentSearch from './pages/Search/RecentSearch.js';
import ItemSearch from './pages/Search/ItemSearch.js';
import MetaverseRelations from './pages/Metaverse/MetaverseRelations';
import MetaverseConcept from './pages/Metaverse/MetaverseConcept';
import CategoriesRelations from './pages/Categories/CategoriesRelations';
import SubCategoriesRelations from './pages/SubCategories/SubCategoriesRelations';




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
        <Route path="/passwordRecovery/authorizedchangepassword" element={<PasswordRecoveryAuthorizedChange />} />
        <Route path="/myaccount/changePassword" element={<PasswordChangePassword />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/team" element={<Team />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/salesDescription" element={<SalesDescription />} />
        <Route path="/salesMetaverse" element={<SalesMetaverse />} />
        <Route path="/salesCategories" element={<SalesCategories />} />
        <Route path="/salesPrice" element={<SalesPrice />} />
        <Route path="/modal3d" element={<Modal3D />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recentSearch" element={<RecentSearch />} />
        <Route path="/itemSearch" element={<ItemSearch />} />
        <Route path="/metaverseRelations" element={<MetaverseRelations />} />
        <Route path="/metaverseConcept" element={<MetaverseConcept />} />
        <Route path="/categoriesRelations" element={<CategoriesRelations />} />
        <Route path="/subCategoriesRelations" element={<SubCategoriesRelations />} />



        

      </Routes>
    </BrowserRouter>
    <ArrowUp />
    <SignLanguage />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
)

