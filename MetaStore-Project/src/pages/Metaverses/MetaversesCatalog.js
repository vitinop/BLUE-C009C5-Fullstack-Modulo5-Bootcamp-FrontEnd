import './MetaversesCatalog.css';
import Slider from '../../components/Slider/Slider'; 
import Card from '../../components/Card/Card';

export default function MetaversesCatalog() {
    return(
        <div className='metaverse-catalog-father'>
            <div className='metaverse-catalog-title'>
                <img src='' alt='foto do metaverse'/>
                <h2>Nome do metaverso</h2>
            </div>

            <Slider />
            
            <div className='metaverse-catalog-card'>
                <Card />
                <Card />
                <Card />
            </div>
            
        </div>
    )
    
}