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
            src="https://iconape.com/wp-content/files/md/247797/png/republic-of-gamers-new-logo.png"
            alt="User's ProfilePicture"
          ></img>
        </div>
        </div>
        <div className="profileInformation">
          Hi,User!
          <div className="container-Showcase">
            <a
              className=""
              href="/myaccount/personal-data"
              id="to-personal-data"
              aria-label="password-recovery-checkout"
            >
              <li> Seller's Showcase </li>{" "}
            </a>
            &nbsp;<FaRegUser />
          </div>
        </div>
      </div>

      <div className="container-userOptions">
        <a
          className=""
          href="/myaccount/personal-data"
          id="to-personal-data"
          aria-label="password-recovery-checkout"
        >
          <li>Personal Data </li>{" "}
        </a>
        <FaRegUser />
      </div>
      <div className="container-userOptions">
        <li>Wallet </li> <BsWallet />
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
        <li>Invite friends</li> <AiOutlineUsergroupAdd />
      </div>
      <div className="container-userOptions">
        <li>Account settings</li> <BsGear />
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
