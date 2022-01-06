import './Descentraland.css';
import Card from '../../../components/Card/Card';
import DescentralandCategories from './DescentralandCategories';

export default function Descentraland() {
    return(
        <div className='descentraland-father'>
            <div className='descentraland-title'>
                <img src='https://www.criptofacil.com/wp-content/uploads/2021/12/metaverso-decentraland-tera-versao-virtual-do-ano-novo-da-times-square.jpg' alt='descentraland-logo'></img>
                <p>Descentraland</p>
            </div>

            <div className='descentraland-description'>
                <img src='https://tm.ibxk.com.br/2021/12/28/28091517233004.jpg?ims=1120x420' alt='descentraland slider'></img>
                <p>Metaverse that commercializes virtual lands and promotes events.</p>
            </div>

            <DescentralandCategories />
            <label>Land</label>
            <Card alt='land' />
            <label>Events</label>
            <Card alt='events' />
            
        </div>
    )
    
}