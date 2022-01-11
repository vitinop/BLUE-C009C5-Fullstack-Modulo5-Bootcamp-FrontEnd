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
import SalesDescription from './pages/Sales/SalesDescription.js';
import SalesMetaverse from './pages/Sales/SalesMetaverse.js';
import SalesCategories from './pages/Sales/SalesCategories.js';
import SalesPrice from './pages/Sales/SalesPrice.js';
import Myaccount from './pages/Myaccount/Myaccount.js';
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
import ProductView from './pages/ProductView/ProductView';
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
import ProductEdit from './pages/ProductEdit/ProductEdit';
import Metaverse from './pages/Metaverse/MetaverseConcept';
import DescentralandEvents from './pages/Metaverses/Descentraland/DescentralandEvents';
import DescentralandLand from './pages/Metaverses/Descentraland/DescentralandLand';
import GoogleAssessories from './pages/Metaverses/Google/GoogleAssessories';
import FortniteShows from './pages/Metaverses/Fortnite/FortniteShows';
import MetaAssessories from './pages/Metaverses/Meta/MetaAssessories';
import MetaWorkRoom from './pages/Metaverses/Meta/MetaWorkRoom';
import MineralsMarth from './pages/Metaverses/Minerals/MineralsMarth';
import MineralsMoon from './pages/Metaverses/Minerals/MineralsMoon';
import NBAGames from './pages/Metaverses/NBA/NBAGames';
import NBAAssessories from './pages/Metaverses/NBA/NBAAssessories';
import NexusCorporateTraining from './pages/Metaverses/Nexus/NexusCorporateTraining';
import NexusEvents from './pages/Metaverses/Nexus/NexusEvents';
import RobloxGames from './pages/Metaverses/Roblox/RobloxGames';
import RobloxAssessories from './pages/Metaverses/Roblox/RobloxAssessories';
import TheSandboxLand from './pages/Metaverses/TheSandbox/ThaSandboxLand';
import TheSandboxRealState from './pages/Metaverses/TheSandbox/ThaSandboxRealState';


import '@google/model-viewer';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BarSearch />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} /> {/* revisar */}
        <Route path="/passwordrecovery/checkout" element={<PasswordRecoveryCheckout />} />
        <Route path="/myaccount/authorizedchangepassword" element={<PasswordRecoveryAuthorizedChange />} />
        <Route path="/myaccount/changePassword" element={<PasswordChangePassword />} />{/* revisar */}
        <Route path="/myaccount/personaldata" element={<PersonalData />} />{/* revisar */}
        <Route path="/myaccount/mysells" element={<MySells />} />{/* revisar */}
        <Route path="/myaccount/accountsettings" element={<AccountSettings />} />{/* revisar */}
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/team" element={<Team />} /> {/* revisar */}
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
        <Route path="/productView" element={<ProductView />} />
        <Route path="/search" element={<Search />} />
        <Route path="/fortnite" element={<Fortnite />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/google" element={<Google />} />
        <Route path="/meta" element={<Meta />} />
        <Route path="/thesandbox" element={<TheSandbox />} />
        <Route path="/roblox" element={<Roblox />} />
        <Route path="/nexus" element={<Nexus />} />        
        <Route path="/nba" element={<NBA />} />
        <Route path="/descentraland" element={<Descentraland />} />
        <Route path="/minerals" element={<Minerals />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/productedit" element={<ProductEdit />} />
        <Route path="/metaverseconcept" element={<Metaverse />} />
        <Route path="/descentralandevents" element={<DescentralandEvents />} />
        <Route path="/descentralandland" element={<DescentralandLand />} />
        <Route path="/googleassessories" element={<GoogleAssessories />} />
        <Route path="/fortniteshows" element={<FortniteShows />} />
        <Route path="/metaAssessories" element={<MetaAssessories />} />
        <Route path="/metaWorkRoom" element={<MetaWorkRoom />} />
        <Route path="/mineralsMarth" element={<MineralsMarth />} />
        <Route path="/mineralsMoon" element={<MineralsMoon />} />
        <Route path="/nbaAssessories" element={<NBAAssessories />} />
        <Route path="/nbaGames" element={<NBAGames />} />
        <Route path="/nexusCorporateTraining" element={<NexusCorporateTraining />} />
        <Route path="/nexusEvents" element={<NexusEvents />} />
        <Route path="/robloxGames" element={<RobloxGames />} />
        <Route path="/robloxAssessories" element={<RobloxAssessories />} />
        <Route path="/theSandboxLand" element={<TheSandboxLand />} />
        <Route path="/theSandboxRealState" element={<TheSandboxRealState />} />

        

      </Routes>
    </BrowserRouter>

    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
)

