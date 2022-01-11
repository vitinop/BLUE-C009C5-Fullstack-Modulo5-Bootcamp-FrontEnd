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
import Wallet from "./pages/Myaccount/Wallet/Wallet";
import Cart from "./pages/Cart/Cart";
import axios from 'axios';
import Google from './pages/Metaverses/Google/Google';
import Meta from './pages/Metaverses/Meta/Meta';
import TheSandbox from './pages/Metaverses/TheSandbox/TheSandbox';
import Roblox from './pages/Metaverses/Roblox/Roblox';
import Nexus from './pages/Metaverses/Nexus/Nexus';
import NBA from './pages/Metaverses/NBA/NBA';
import Descentraland from './pages/Metaverses/Descentraland/Descentraland';
import Minerals from './pages/Metaverses/Minerals/Minerals';
import WishList from './pages/Wishlist/Wishlist';
import '@google/model-viewer';

axios.defaults.baseURL = 'https://metastoreteste1.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BarSearch />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{/* revisar */}
        <Route path="/login" element={<Login />} />{/* revisar */}
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} /> {/* revisar */}
        <Route path="/passwordrecovery/checkout" element={<PasswordRecoveryCheckout />} />{/* revisar */}
        <Route path="/myaccount/authorizedchangepassword" element={<PasswordRecoveryAuthorizedChange />} />{/* revisar */}
        <Route path="/myaccount/changePassword" element={<PasswordChangePassword />} />{/* revisar */}
        <Route path="/myaccount/personaldata" element={<PersonalData />} />{/* revisar */}
        <Route path="/myaccount/mysells" element={<MySells />} />{/* revisar */}
        <Route path="/myaccount/accountsettings" element={<AccountSettings />} />{/* revisar */}
        <Route path="/myaccount" element={<Myaccount />} />{/* revisar */}
        <Route path="/team" element={<Team />} /> {/* revisar */}
        <Route path="/friends" element={<Friends />} />{/* revisar */}
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />{/* revisar */}
        <Route path="/salesdescription" element={<SalesDescription />} />{/* revisar */}
        <Route path="/salesmetaverse" element={<SalesMetaverse />} />{/* revisar */}
        <Route path="/salescategories" element={<SalesCategories />} />{/* revisar */}
        <Route path="/salesprice" element={<SalesPrice />} />{/* revisar */}
        <Route path="/salespublic" element={<SalesPublic />} />{/* revisar */}
        <Route path="/modal3d" element={<Modal3D />} />{/* revisar */}
        <Route path="/recentSearch" element={<RecentSearch />} />{/* revisar */}
        <Route path="/itemSearch" element={<ItemSearch />} />{/* revisar */}
        <Route path="/metaversesRelations" element={<MetaversesRelations />} />{/* revisar */}
        <Route path="/categoriesRelations" element={<CategoriesRelations />} />{/* revisar */}
        <Route path="/subCategoriesRelations" element={<SubCategoriesRelations />} />{/* revisar */}
        <Route path="/metaversesCatalog" element={<MetaversesCatalog />} />{/* revisar */}
        <Route path="/categoriesCatalog" element={<CategoriesCatalog />} />{/* revisar */}
        <Route path="/subCategoriesCatalog" element={<SubCategoriesCatalog />} />{/* revisar */}
        <Route path="/userCatalog" element={<UserCatalog />} />{/* revisar */}
        <Route path="/payment" element={<Payment />} />{/* revisar */}
        <Route path="/satisfactionSurvey" element={<SatisfactionSurvey />} />{/* revisar */}
        <Route path="/productAdd" element={<ProductAdd />} />{/* revisar */}
        <Route path="/search" element={<Search />} />{/* revisar */}
        <Route path="/fortnite" element={<Fortnite />} />{/* revisar */}
        <Route path="/wallet" element={<Wallet />} />{/* revisar */}
        <Route path="/cart" element={<Cart />} />{/* revisar */}
        <Route path="/google" element={<Google />} />{/* revisar */}
        <Route path="/meta" element={<Meta />} />{/* revisar */}
        <Route path="/thesandbox" element={<TheSandbox />} />{/* revisar */}
        <Route path="/roblox" element={<Roblox />} />{/* revisar */}
        <Route path="/nexus" element={<Nexus />} />        {/* revisar */}
        <Route path="/nba" element={<NBA />} />{/* revisar */}
        <Route path="/descentraland" element={<Descentraland />} />{/* revisar */}
        <Route path="/minerals" element={<Minerals />} />{/* revisar */}
        <Route path="/wishlist" element={<WishList />} />{/* revisar */}
      </Routes>
    </BrowserRouter>
    <div className="center-signs">&nbsp;
      <p><ArrowUp /></p> &nbsp;
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
)

