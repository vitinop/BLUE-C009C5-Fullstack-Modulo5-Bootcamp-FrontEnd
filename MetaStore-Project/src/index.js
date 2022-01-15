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
import Myaccount from './pages/Myaccount/Myaccount.js';
import PasswordRecoveryAuthorizedChange from "./pages/Myaccount/AccountSettings/PasswordRecoveryAuthorizedChange";
import AccountSettings from './pages/Myaccount/AccountSettings/AccountSettings';
import Payment from './pages/Payment/Payment';
import ProductAdd from './pages/ProductAdd/ProductAdd';
import BarSearch from './components/BarSearch/BarSearch';
import Cart from './pages/Cart/Cart';
import Catalog from './pages/Catalog/Catalog';
import axios from "axios";
import '@google/model-viewer';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BarSearch />
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* revisado */}
        <Route path="/login" element={<Login />} />
      
        <Route path="/createAccount" element={<CreateAccount />} />{/* revisado */}
        <Route path="/passwordrecovery" element={<PasswordRecovery />} /> {/* revisado */}
        <Route path="/passwordrecovery/checkout" element={<PasswordRecoveryCheckout />} />{/* revisado */}
        <Route path="/myaccount/authorizedchangepassword" element={<PasswordRecoveryAuthorizedChange />} />{/* revisado */}
        <Route path="/myaccount/changePassword" element={<PasswordChangePassword />} />{/* revisado */}
        <Route path="/myaccount/accountsettings" element={<AccountSettings />} />{/* revisado */}
        <Route path="/myaccount" element={<Myaccount />} />{/* revisado */}
        <Route path="/payment" element={<Payment />} />{/* revisado */}
        <Route path="/productAdd" element={<ProductAdd />} />{/* revisado */}
        <Route path="/cart" element={<Cart />} />{/* revisado */}
        <Route path="/payment" element={<Payment />} />{/* revisado */}
        <Route path="/catalog" element={<Catalog />} />{/* revisado */}
      </Routes>
    </BrowserRouter>
    <Footer />
    
  </React.StrictMode>,
  document.getElementById("root")
)