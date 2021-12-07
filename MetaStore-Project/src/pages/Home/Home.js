import Slider from '../../Components/Slider/Slider';
import './Home.css';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';



export default function Home(){
    return(
        <div classname='home'>
            <Slider />
            <div className='midias'>
                <FiFacebook />
                <FaInstagram />
                <MdOutlineEmail />
                <FaWhatsapp />
            </div>

            <span>Direitos autorais metastore&copy; - 2021 </span>
        </div>
    )
}