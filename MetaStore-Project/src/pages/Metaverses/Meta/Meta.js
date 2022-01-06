import './Meta.css';
import Card from '../../../components/Card/Card';
import MetaCategories from './MetaCategories';

export default function Meta() {
    return(
        <div className='meta-father'>
            <div className='meta-title'>
                <img src='https://logosmarcas.net/wp-content/uploads/2021/11/Meta-Symbolo.jpg' alt='meta-logo'></img>
                <p>Meta</p>
            </div>

            <div className='meta-description'>
                <img src='https://im.haberturk.com/2021/10/29/ver1635511393/3236478_810x458.jpg' alt='meta slider'></img>
                <p>The Meta bets on augmented and virtual reality as the future of social networks.</p>
            </div>

            <MetaCategories />

            <label>Oculus</label>
            <Card alt='Oculus' />
            <label>Horizons Workroom</label>
            <Card alt='Horizons Workroom' />
            


        </div>
    )
    
}

