import './NBA.css';
import Card from '../../../components/Card/Card';
import NBACategories from '../NBA/NBACategories';

export default function NBA() {
    return(
        <div className='nba-father'>
            <div className='nba-title'>
                <img src='https://www.prensalatina.com.br/wp-content/uploads/2021/05/1-lam-nba-2.png' alt='nba-logo'></img>
                <p>NBA</p>
            </div>

            <div className='nba-description'>
                <img src='https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/09/FANZONE_03.jpg?w=1024' alt='nba slider'></img>
                <p>His concept, mixing “gamification with the metaverse”.</p>
            </div>

            <NBACategories />
            <label>BasketGame</label>
            <Card alt='BasketGame' />
            <label>VRGlass</label>
            <Card alt='VRGlass' />

        </div>
    )
    
}