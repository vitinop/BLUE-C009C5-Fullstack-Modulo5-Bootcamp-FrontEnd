import "./Myaccount.css";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { BsWallet, BsGear } from "react-icons/bs";
import { BiPurchaseTag, BiDollar, BiHeart } from "react-icons/bi";


export default function Myaccount() {
  return (
    <div className="center-myaccount">
      <div className="myaccount-top">
        <div className="profilePicture">
          <img
            src="https://iconape.com/wp-content/files/md/247797/png/republic-of-gamers-new-logo.png"
            alt="User's ProfilePicture"
          ></img>
        </div>
        <div className="profileInformation">Hi,User!
        <div className="container-Showcase">
        <a
          className=""
          href="/myaccount/personal-data"
          id="to-personal-data"
          aria-label="password-recovery-checkout"
        >
          <li>Seller's Showcase </li>{" "}
        </a>
        <FaRegUser />
      </div></div>
        
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
        <li>Favorite Itens</li> <BiHeart />
      </div>
      <div className="container-userOptions">
        <li>Invite friends</li> <AiOutlineUsergroupAdd />
      </div>
      <div className="container-userOptions">
        <li>Account settings</li> <BsGear />
      </div>
      
      <div className="container-userOptions">
        <li>Atalho pra modal de logout</li> <IoIosLogOut />
      </div>
      
    </div>
  );
}
