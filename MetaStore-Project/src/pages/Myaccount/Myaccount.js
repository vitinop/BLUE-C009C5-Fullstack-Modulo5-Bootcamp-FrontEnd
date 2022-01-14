import "./Myaccount.css";
import { AiOutlineUsergroupAdd, AiOutlineNotification } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { BsWallet, BsGear } from "react-icons/bs";
import { BiPurchaseTag, BiDollar, BiHeart } from "react-icons/bi";
import LogoutModal from "../../components/Modal/LogoutModal";

export default function Myaccount() {
  return (
    <div className="center-myaccount">
      <div className="myaccount-links">
        <div className="centerProfile">
          <div className="profilePicture">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="User's ProfilePicture"
            ></img>
          </div>
        </div>
        <div className="profileInformation">
          Hi,User!
          <div className="container-Showcase">
            <a href="/myaccount/personal-data">
              <li> Seller's Showcase </li>{" "}
            </a>
            &nbsp;
            <FaRegUser />
          </div>
        </div>
      </div>

      <div className="container-userOptions">
        <a href="/myaccount/personal-data">
          <li>Personal Data </li>{" "}
        </a>
        <FaRegUser />
      </div>
      <div className="container-userOptions">
        <a href="/myaccount/wallet">
          <li>Wallet </li>{" "}
        </a>
        <BsWallet />
      </div>
      <div className="container-userOptions">
        <li>My Sells </li> <BiDollar />
      </div>
      <div className="container-userOptions">
        <li>My Purchases</li> <BiPurchaseTag />
      </div>
      <div className="container-userOptions">
        <li>My Ads</li> <AiOutlineNotification />
      </div>
      <div className="container-userOptions">
        <li>Favorite Itens</li> <BiHeart />
      </div>
      <div className="container-userOptions">
        <a href="/invitefriends">
          <li>Invite friends</li>{" "}
        </a>
        <AiOutlineUsergroupAdd />
      </div>
      <div className="container-userOptions">
        <a href="/myaccount/accountsettings">
          <li>Account settings</li>
        </a>{" "}
        <BsGear />
      </div>

      <div className="container-userOptions">
        <li>
          <LogoutModal />
        </li>{" "}
        <IoIosLogOut />
      </div>
    </div>
  );
}
