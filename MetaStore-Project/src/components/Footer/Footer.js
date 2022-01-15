import "./Footer.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { VscTag } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function Footer() {
  return (
    <div className="footer-father">
      <div className="footer-icons">

        <div className="icon">
          <a href="/">
            <button className="send" type="submit">
              <AiOutlineHome />
              <p>home</p>
            </button>
          </a>
        </div>

        <div className="icon">
          <a href="/search">
            <button className="send" type="submit">
              <FiSearch />
              <p>search</p>
            </button>
          </a>
        </div>

        

        <div className="icon">
          <a href="/salesdescription">
              <button className="send" type="submit">
                <VscTag />
                <p>sell</p>
              </button>
            </a>
        </div>

        <div className="icon">
          <a href="/">
            <button className="send" type="submit">
              <BsHandbag />
              <p>bag</p>
            </button>
          </a>
        </div>

        <div className="icon">
          <a href="/myaccount">
            <button className="send" type="submit">
              <CgProfile />
              <p>profile</p>
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}
