import './MetaverseCatalog.css';
import Slider from '../../components/Slider/Slider'; 
import Card from '../../components/Card/Card';

export default function MetaverseCatalog() {
    return(
        <div className='metaverse-catalog-father'>
            <div className='metaverse-catalog-title'>
                <img src='' alt='foto do metaverse'/>
                <h2>Nome do metaverso</h2>
            </div>

            <Slider />
            <div className='metaverse-catalog-description'>
                <h1>INCLUIR DESCRIÇÃO</h1>
            </div>
            <div className='metaverse-catalog-card'>
                <Card />
                <Card />
                <Card />
            </div>
            
        </div>
    )
    
}