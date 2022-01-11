import './Team.css';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowUpCircle } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai'
// import videoMarla from "./Avatares/videoMarla.mp4";
// import videoVictor from "./Avatares/videoVictor.mp4";
import marla from "./Avatares/marla.jpg";
import victor from "./Avatares/victor.jpg";
import paulo from "./Avatares/paulo.jpg";
import everton from "./Avatares/everton.jpg";
import leonardo from "./Avatares/leonardo.jpg";


export default function Equipe() {
    return(
        <div className='center-all'>
            <div className='team-father'>
                
                <div className='team-description'>
                    <div className='avatar'>                    
                        <img src={marla} alt='marla'></img>
                        {/* <video width="320" height="240" controls>
                            <source src={videoMarla} type="video/mp4"/>
                        </video> */}
                        <div className="media-description">
                            <h3>Descrição</h3>
                            <a href='https://www.instagram.com/devmarlacabral/?hl=pt-br'><FaInstagram /></a>
                            
                            <a href='https://www.linkedin.com/in/marla-cabral-031428124/'><AiFillLinkedin /></a>
                        </div>
                    </div>&nbsp;

                    <div className='avatar'>
                        <img src={victor} alt='victor'></img>
                        {/* <video width="320" height="240" controls>
                            <source src={videoVictor} type="video/mp4"/>
                        </video> */}
                        <div className="media-description">
                            <h3>Descrição</h3>
                            <a href='insta-victor'><FaInstagram /></a>
                            
                            <a href='lkd-victor'><AiFillLinkedin /></a>
                        </div>
                    </div>&nbsp;    
                    
                    <div className='avatar'>
                        <img src={paulo} alt='paulo'></img>
                        <div className="media-description">
                            <h3>Descrição</h3>
                            <a href='insta-paulo'><FaInstagram /></a>
                            
                            <a href='lkd-paulo'><AiFillLinkedin /></a>
                        </div>
                    </div>&nbsp; 

                    <div className='avatar'>
                        <img src={leonardo} alt='leonardo'></img>
                        <div className="media-description">
                            <h3>Descrição</h3>
                            <a href='insta-leonardo'><FaInstagram /></a>
                            
                            <a href='lkd-leonardo'><AiFillLinkedin /></a>
                        </div>
                    </div>&nbsp; 

                    <div className='avatar'>
                        <img src={everton} alt='everton'></img>
                        <div className="media-description">
                            <h3>Descrição</h3>
                            <a href='insta-everton'><FaInstagram /></a>
                            
                            <a href='lkd-everton'><AiFillLinkedin /></a>
                        </div>
                    </div>&nbsp;
                </div>
            </div>
        <BsArrowUpCircle />
    </div>
    
    )    
}