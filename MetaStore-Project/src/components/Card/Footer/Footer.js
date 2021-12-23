import "./Footer.css";
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
          <AiOutlineHome />
          <p>home</p>
        </div>
        <div className="search-icon">
          <FiSearch />
          <p>search</p>
        </div>
        <div className="sell-icon">
          <VscTag />
          <p>sell</p>
        </div>
        <div className="bag-icon">
          <BsHandbag />
          <p>bag</p>
        </div>
        <div className="profile-icon">
          <CgProfile /> <p>profile</p>
        </div>
      </div>
    </div>
  );
}
