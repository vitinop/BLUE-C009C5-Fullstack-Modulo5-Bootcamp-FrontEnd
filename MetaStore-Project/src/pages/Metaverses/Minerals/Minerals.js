import './Minerals.css';
import Card from '../../../components/Card/Card';
import MineralsCategories from './MineralsCategories';

export default function Minerals() {
    return(
        <div className='minerals-father'>
            <div className='minerals-title'>
                <img src='https://www.borregaard.com/media/pxdlu3eq/shutterstock_152765387.png?crop=0.05,0.0500000000000001,0,0&cropmode=percentage&width=640&height=360' alt='minerals-logo'></img>
                <p>Minerals</p>
            </div>

            <div className='minerals-description'>
                <img src='https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2021/01/antartida.jpg' alt='minerals slider'></img>
                <p>Minerals imported from the solar system.</p>
            </div>

            <MineralsCategories />
            <label>Marth</label>
            <Card alt='marth' />
            <label>Moon</label>
            <Card alt='moon' />
            
        </div>
    )
    
}