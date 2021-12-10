import './Catalog.css';
import { FaArrowUp } from 'react-icons/fa';
import Slider from '../Slider/Slider';
import Card from '../Card/Card';

export default function ProfileMetaversos(){

    return(
        <div className='catalog-father'>
            <div className='catalog-metaversos'>
                <div className='catalog-name'>
                    <img className='catalog-logo'src='https://1.bp.blogspot.com/-lsjB4fQZHJg/YOnQNaKN4VI/AAAAAAAABlc/hAWn1SnV_dI0bLTxSyEfiUqmXOL1I_-_wCLcBGAsYHQ/s618/Logo%2BThe%2BSandbox%2B%2528SAND%2529%2BCryptocurrency.jpg' alt='logo metaverso'/>
                    <h3>Nome do metaverso</h3>
                </div>

                <Slider />

                <div className='catalog-description'>
                    <h4>Descrição do metaverso</h4>
                    <h5>saber mais</h5>
                </div>

                <div className='catalog-cards'>
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    <Card/> 
                    
                </div>
                
            </div>
            <div className='catalog-icon'>
                <FaArrowUp />
            </div>
    </div>
    )
}