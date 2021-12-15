import './UserCatalog.css';
import Slider from '../../components/Slider/Slider'; 
import Card from '../../components/Card/Card';

export default function UserCatalog() {
    return(
        <div className='user-catalog-father'>
            <div className='user-catalog-title'>
                <img src='' alt='foto do user'/>
                <h2>Nome do user</h2>
            </div>

            <Slider />
            <div className='user-catalog-description'>
                <h1>INCLUIR DESCRIÇÃO</h1>
            </div>
            <div className='user-catalog-card'>
                <Card />
                <Card />
                <Card />
            </div>
            
        </div>
    )
    
}