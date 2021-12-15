import './CategoriesCatalog.css';
import Slider from '../../components/Slider/Slider'; 
import Card from '../../components/Card/Card';

export default function CategoriesCatalog() {
    return(
        <div className='categories-catalog-father'>
            <div className='categories-catalog-title'>
                <img src='' alt='foto da categoria'/>
                <h2>Nome da categoria</h2>
            </div>

            <Slider />
            <div className='categories-catalog-description'>
                <h1>INCLUIR DESCRIÇÃO</h1>
            </div>
            <div className='categories-catalog-card'>
                <Card />
                <Card />
                <Card />
            </div>
            
        </div>
    )
    
}