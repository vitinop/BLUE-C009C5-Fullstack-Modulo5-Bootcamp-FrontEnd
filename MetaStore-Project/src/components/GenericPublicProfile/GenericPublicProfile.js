import './GenericPublicProfile.css';
import { BsArrowUpCircle } from 'react-icons/bs';
import Slider from '../Slider/Slider';
import Card from '../Card/Card';

export default function GenericPublicProfile(){

    return(
        <div className='generic-public-profile-father'>
            <div className='generic-public-profile'>
                <div className='generic-public-profile-name'>
                    <img className='generic-public-profile-logo'src='https://1.bp.blogspot.com/-lsjB4fQZHJg/YOnQNaKN4VI/AAAAAAAABlc/hAWn1SnV_dI0bLTxSyEfiUqmXOL1I_-_wCLcBGAsYHQ/s618/Logo%2BThe%2BSandbox%2B%2528SAND%2529%2BCryptocurrency.jpg' alt='logo metaverso' />&nbsp;
                    <h3>Nome do metaverso</h3>
                </div>
                <div className='generic-public-profile-slider'>
                <Slider />
                </div>

                <div className='generic-public-profile-description'>
                    <h4>Descrição do metaverso</h4>
                    <h5>saber mais</h5>
                </div>

                <div className='generic-public-profile-cards'>
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    
                </div>
                
            </div>
            <div className='generic-public-profile-icon'>
                <BsArrowUpCircle />
            </div>
    </div>
    )
}
