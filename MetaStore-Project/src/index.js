import "./index.css";
import Adds from './pages/Adds/Adds';
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
import MySells1 from './pages/Myaccount/MySells1/MySells1';
import MySells2 from './pages/Myaccount/MySells2/MySells2';
import MyShopping1 from './pages/Myaccount/MyShopping1/MyShopping1';
import MyShopping2 from './pages/Myaccount/MyShopping2/MyShopping2';
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
import Cart from "./pages/Cart/Cart";
import Wallet from "./pages/Myaccount/Wallet/Wallet";
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
        <Route path="/" element={<Home />} /> {/* revisar */}
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} /> {/* revisar */}
        <Route path="/passwordrecovery/checkout" element={<PasswordRecoveryCheckout />} />
        <Route path="/myaccount/authorizedchangepassword" element={<PasswordRecoveryAuthorizedChange />} />{/* revisar */}
        <Route path="/myaccount/changePassword" element={<PasswordChangePassword />} />{/* revisar */}
        <Route path="/myaccount/personaldata" element={<PersonalData />} />{/* revisar */}
        <Route path="/myaccount/mysells1" element={<MySells1 />} />{/* revisar */}
        <Route path="/myaccount/mysells2" element={<MySells2 />} />{/* revisar */}
        <Route path="/myaccount/myshopping1" element={<MyShopping1 />} />{/* revisar */}
        <Route path="/myaccount/myshopping2" element={<MyShopping2 />} />{/* revisar */}
        <Route path="/myaccount/accountsettings" element={<AccountSettings />} />{/* revisar */}
        <Route path="/myaccount" element={<Myaccount />} />{/* revisar */}
        <Route path="/team" element={<Team />} /> {/* revisar */}
        <Route path="/invitefriends" element={<Friends />} />
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
        <Route path="/cart" element={<Cart />} />{/* revisar */}
        <Route path="/wishlist" element={<WishList />} />{/* revisar */}
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
        <Route path="/wishlist" element={<WishList />} />{/* revisar */}
        <Route path="/productedit" element={<ProductEdit />} />{/* revisar */}
        <Route path="/satisfactionSurvey" element={<SatisfactionSurvey />} />{/* revisar */}
        <Route path="/productAdd" element={<ProductAdd />} />{/* revisar */}
        <Route path="/productView" element={<ProductView />} />{/* revisar */}
        <Route path="/Adds" element={<Adds />} />{/* revisar */}
        
        
        <Route path="/thesandbox" element={<TheSandbox />} />{/* revisar */}
        <Route path="/roblox" element={<Roblox />} />{/* revisar */}
        <Route path="/nexus" element={<Nexus />} />        {/* revisar */}
        <Route path="/nba" element={<NBA />} />{/* revisar */}
        <Route path="/fortnite" element={<Fortnite />} />{/* revisar */}
        <Route path="/google" element={<Google />} />{/* revisar */}
        <Route path="/meta" element={<Meta />} />{/* revisar */}
        <Route path="/descentraland" element={<Descentraland />} />{/* revisar */}
        <Route path="/minerals" element={<Minerals />} />{/* revisar */}
        <Route path="/metaverseconcept" element={<Metaverse />} />{/* revisar */}
        <Route path="/descentralandevents" element={<DescentralandEvents />} />{/* revisar */}
        <Route path="/descentralandland" element={<DescentralandLand />} />{/* revisar */}
        <Route path="/googleassessories" element={<GoogleAssessories />} />{/* revisar */}
        <Route path="/fortniteshows" element={<FortniteShows />} />{/* revisar */}
        <Route path="/metaAssessories" element={<MetaAssessories />} />{/* revisar */}
        <Route path="/metaWorkRoom" element={<MetaWorkRoom />} />{/* revisar */}
        <Route path="/mineralsMarth" element={<MineralsMarth />} />{/* revisar */}
        <Route path="/mineralsMoon" element={<MineralsMoon />} />{/* revisar */}
        <Route path="/nbaAssessories" element={<NBAAssessories />} />{/* revisar */}
        <Route path="/nbaGames" element={<NBAGames />} />{/* revisar */}
        <Route path="/nexusCorporateTraining" element={<NexusCorporateTraining />} />{/* revisar */}
        <Route path="/nexusEvents" element={<NexusEvents />} />{/* revisar */}
        <Route path="/robloxGames" element={<RobloxGames />} />{/* revisar */}
        <Route path="/robloxAssessories" element={<RobloxAssessories />} />{/* revisar */}
        <Route path="/theSandboxLand" element={<TheSandboxLand />} />{/* revisar */}
        <Route path="/theSandboxRealState" element={<TheSandboxRealState />} />{/* revisar */}

      </Routes>
    </BrowserRouter>

    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
)

