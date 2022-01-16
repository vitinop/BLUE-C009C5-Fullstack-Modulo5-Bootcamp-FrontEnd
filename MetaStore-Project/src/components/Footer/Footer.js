import "./Footer.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { VscTag } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function Footer() {
  return (
    <div className="center-footer">
    <div className="footer-father">
      <div className="footer-icons">

        <div className="icon">
          <a href="/">
            <button className="send" type="submit">
              <span><AiOutlineHome /></span>
            </button>
          </a>
        </div>

        <div className="icon">
          <a href="/search">
            <button className="send" type="submit">
             <span><FiSearch /></span>
            </button>
          </a>
        </div>
        

        <div className="icon">
          <a href="/salesdescription">
              <button className="send" type="submit">
                <span><VscTag /></span>
              </button>
            </a>
        </div>

        <div className="icon">
          <a href="/cart">
            <button className="send" type="submit">
              <span><BsHandbag /></span>
            </button>
          </a>
        </div>

        <div className="icon">
          <a href="/myaccount">
            <button className="send" type="submit">
               <span><CgProfile /></span>
            </button>
          </a>
        </div>

      </div>
    </div>
    </div>
  );
}
