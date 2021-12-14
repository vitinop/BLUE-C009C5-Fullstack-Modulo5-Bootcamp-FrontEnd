import './Team.css';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowUpCircle } from 'react-icons/bs';
import videoMarla from "./Avatares/videoMarla.mp4";
import videoVictor from "./Avatares/videoVictor.mp4";


export default function Equipe() {
    return(
        <div className='center-all'>
        <div className='team-father'>
            
            <div className='team-description'>
                <video width="320" height="240" controls>
                    <source src={videoMarla} type="video/mp4"/>
                </video>
                <div className="media-description">
                    <h3>Descrição</h3>
                    <FiFacebook />
                    <FaInstagram />
                    <MdOutlineEmail />
                    <FaWhatsapp />
                </div>
            </div>

            <div className='team-description'>
                <video width="320" height="240" controls>
                    <source src={videoVictor} type="video/mp4"/>
                </video>
                <div className="media-description">
                    <h3>Descrição</h3>
                    <FiFacebook />
                    <FaInstagram />
                    <MdOutlineEmail />
                    <FaWhatsapp />
                </div>
            </div>    
            
            <div className='team-description'>
                <video width="320" height="240" controls>
                    <source src={videoVictor} type="video/mp4"/>
                </video>
                <div className="media-description">
                    <h3>Descrição</h3>
                    <FiFacebook />
                    <FaInstagram />
                    <MdOutlineEmail />
                    <FaWhatsapp />
                </div>
            </div>

            <div className='team-description'>
                <video width="320" height="240" controls>
                    <source src={videoVictor} type="video/mp4"/>
                </video>
                <div className="media-description">
                    <h3>Descrição</h3>
                    <FiFacebook />
                    <FaInstagram />
                    <MdOutlineEmail />
                    <FaWhatsapp />
                </div>
            </div>
            <div className='team-description'>
                <video width="320" height="240" controls>
                    <source src={videoVictor} type="video/mp4"/>
                </video>
                <div className="media-description">
                    <h3>Descrição</h3>
                    <FiFacebook />
                    <FaInstagram />
                    <MdOutlineEmail />
                    <FaWhatsapp />
                </div>
            </div>

            <div className='team-description'>
                <video width="320" height="240" controls>
                    <source src={videoVictor} type="video/mp4"/>
                </video>
                <div className="media-description">
                    <h3>Descrição</h3>
                    <FiFacebook />
                    <FaInstagram />
                    <MdOutlineEmail />
                    <FaWhatsapp />
                </div>
            </div>
        </div>
        <BsArrowUpCircle />
        </div>
    )    
}