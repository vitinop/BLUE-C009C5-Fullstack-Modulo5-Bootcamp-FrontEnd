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
        <Route path="/" element={<Home />} /> {/* revisar */}
        <Route path="/login" element={<Login />} />
      
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} /> {/* revisar */}
        <Route path="/passwordrecovery/checkout" element={<PasswordRecoveryCheckout />} />
        <Route path="/myaccount/authorizedchangepassword" element={<PasswordRecoveryAuthorizedChange />} />{/* revisar */}
        <Route path="/myaccount/changePassword" element={<PasswordChangePassword />} />{/* revisar */}
        <Route path="/myaccount/accountsettings" element={<AccountSettings />} />{/* revisar */}
        <Route path="/myaccount" element={<Myaccount />} />{/* revisar */}
        <Route path="/payment" element={<Payment />} />{/* revisar */}
        <Route path="/productAdd" element={<ProductAdd />} />{/* revisar */}
        <Route path="/cart" element={<Cart />} />{/* revisar */}
        <Route path="/payment" element={<Payment />} />{/* revisar */}
        
      </Routes>
    </BrowserRouter>
    <Footer />
    
  </React.StrictMode>,
  document.getElementById("root")
)