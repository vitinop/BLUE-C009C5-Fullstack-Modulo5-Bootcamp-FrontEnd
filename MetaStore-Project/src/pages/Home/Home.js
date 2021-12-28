import Slider from "../../components/Slider/Slider";
import BarSearch from "../../components/BarSearch/BarSearch";
import Card3Row from "../../components/Card3Row/Card3Row";
import "./Home.css";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


export default function Home() {
  return (
    <div classname="home-father">
      <BarSearch/>
      <h3>"Todos os metaversos em um único lugar"</h3>
      <Slider />&nbsp;

      <Card3Row />
      
      <div className="home-midias">
        <FiFacebook />&nbsp;
        <FaInstagram />&nbsp;
        <MdOutlineEmail />&nbsp;
        <FaWhatsapp />&nbsp;

        <p><span>Direitos autorais metastore&copy; - 2021 </span></p>
      </div>
    </div>
  );
}
