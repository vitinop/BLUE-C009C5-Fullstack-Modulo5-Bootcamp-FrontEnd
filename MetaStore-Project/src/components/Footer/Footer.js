import "./Footer.css";
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { VscTag } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">

        <div className="home-icon">
          <a href="/">
            <button className="send-home" type="submit">
              <AiOutlineHome />
              <p>home</p>
            </button>
          </a>
        </div>

        <div className="search-icon">
          <a href="/search">
            <button className="send-search" type="submit">
              <FiSearch />
              <p>search</p>
            </button>
          </a>
        </div>

        

        <div className="sell-icon">
          <a href="/salesdescription">
              <button className="send-sell" type="submit">
                <VscTag />
                <p>sell</p>
              </button>
            </a>
        </div>

        <div className="bag-icon">
          <a href="/">
            <button className="send-bag" type="submit">
              <BsHandbag />
              <p>bag</p>
            </button>
          </a>
        </div>

        <div className="profile-icon">
          <a href="/myaccount">
            <button className="send-profile" type="submit">
              <CgProfile />
              <p>profile</p>
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}
