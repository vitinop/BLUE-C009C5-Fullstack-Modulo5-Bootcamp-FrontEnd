import './SubCategoriesCatalog.css';
import Slider from '../../components/Slider/Slider'; 
import Card from '../../components/Card/Card';

export default function SubCategoriesCatalog() {
    return(
        <div className='subcategories-catalog-father'>
            <div className='subcategories-catalog-title'>
                <img src='' alt='foto da subcategoria'/>
                <h2>Nome da subcategoria</h2>
            </div>

            <Slider />
            <div className='subcategories-catalog-description'>
                <h1>INCLUIR DESCRIÇÃO</h1>
            </div>
            <div className='subcategories-catalog-card'>
                <Card />
                <Card />
                <Card />
            </div>
            
        </div>
    )
    
}