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
import ItemSearch from './pages/Search/ItemSearch.js';
import MetaversesRelations from './pages/Metaverses/MetaversesRelations';
import CategoriesRelations from './pages/Categories/CategoriesRelations';
import SubCategoriesRelations from './pages/SubCategories/SubCategoriesRelations';
import MetaversesCatalog from './pages/Metaverses/MetaversesCatalog';
import CategoriesCatalog from './pages/Categories/CategoriesCatalog';
import SubCategoriesCatalog from './pages/SubCategories/SubCategoriesCatalog';
import UserCatalog from './pages/UserCatalog/UserCatalog';
import MySells from './pages/Myaccount/MySells/MySells';
import PasswordRecoveryAuthorizedChange from "./pages/Myaccount/AccountSettings/PasswordRecoveryAuthorizedChange";
import AccountSettings from './pages/Myaccount/AccountSettings/AccountSettings';
import Payment from './pages/Payment/Payment';
import SatisfactionSurvey from './pages/SatisfactionSurvey/SatisfactionSurvey';
import PersonalData from './pages/Myaccount/PersonalData/PersonalData';
import ProductAdd from './pages/ProductAdd/ProductAdd';
import RecentSearch from './pages/Search/RecentSearch';
import Search from './pages/Search/Search';
import BarSearch from './components/BarSearch/BarSearch';
import SalesPublic from './pages/Sales/SalesPublic';
import Fortnite from './pages/Metaverses/Fortnite/Fortnite';


// import axios from 'axios';
import '@google/model-viewer';


// axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com/';
// axios.defaults.headers.post['Content-Type'] = 'application/json';



ReactDOM.render(
  <React.StrictMode>
    <Navbar /> 
    <BarSearch />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} />
        <Route path="/passwordrecovery/checkout" element={<PasswordRecoveryCheckout />} />
        <Route path="/myaccount/authorizedchangepassword" element={<PasswordRecoveryAuthorizedChange />} />
        <Route path="/myaccount/changePassword" element={<PasswordChangePassword />} />
        <Route path="/myaccount/personaldata" element={<PersonalData />} />
        <Route path="/myaccount/mysells" element={<MySells />} />
        <Route path="/myaccount/accountsettings" element={<AccountSettings />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/team" element={<Team />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/salesdescription" element={<SalesDescription />} />
        <Route path="/salesmetaverse" element={<SalesMetaverse />} />
        <Route path="/salescategories" element={<SalesCategories />} />
        <Route path="/salesprice" element={<SalesPrice />} />
        <Route path="/salespublic" element={<SalesPublic />} />
        <Route path="/modal3d" element={<Modal3D />} />
        <Route path="/recentSearch" element={<RecentSearch />} />
        <Route path="/itemSearch" element={<ItemSearch />} />
        <Route path="/metaversesRelations" element={<MetaversesRelations />} />
        <Route path="/categoriesRelations" element={<CategoriesRelations />} />
        <Route path="/subCategoriesRelations" element={<SubCategoriesRelations />} />
        <Route path="/metaversesCatalog" element={<MetaversesCatalog />} />
        <Route path="/categoriesCatalog" element={<CategoriesCatalog />} />
        <Route path="/subCategoriesCatalog" element={<SubCategoriesCatalog />} />
        <Route path="/userCatalog" element={<UserCatalog />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/satisfactionSurvey" element={<SatisfactionSurvey />} />
        <Route path="/productAdd" element={<ProductAdd />} />
        <Route path="/search" element={<Search />} />
        <Route path="/fortnite" element={<Fortnite />} />

      </Routes>
    </BrowserRouter>
    <ArrowUp />
    <SignLanguage />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
)

