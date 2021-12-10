import Slider from "../../components/Slider/Slider";
import "./Home.css";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  return (
    <div classname="home">
      <h3>"Todos os metaversos em um único lugar"</h3>
      <Slider />

      <div className="midias">
        <FiFacebook />&nbsp;
        <FaInstagram />&nbsp;
        <MdOutlineEmail />&nbsp;
        <FaWhatsapp />&nbsp;
        <p><span>Direitos autorais metastore&copy; - 2021 </span></p>
      </div>
    </div>
  );
}
