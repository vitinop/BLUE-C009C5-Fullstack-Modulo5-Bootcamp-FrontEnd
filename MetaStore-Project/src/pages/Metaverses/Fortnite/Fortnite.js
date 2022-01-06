import './Fortnite.css';
import Card from '../../../components/Card/Card';
import FortniteCategories from './FortniteCategories';

export default function Fortnite() {
    return(
        <div className='fortnite-father'>
            <div className='fortnite-title'>
                <img src='https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/35257.png' alt='fortnite-logo'></img>
                <p>Fortnite</p>
            </div>

            <div className='fortnite-description'>
                <img src='https://mais.opovo.com.br/_midias/jpg/2021/10/27/fortnite-17356546.jpg' alt='fortnite slider'></img>
                <p>Fortnite has evolved from a simple game to a socialization platform that even promotes concerts by famous musicians.</p>
            </div>

            <FortniteCategories />
            <label>Ariana Grande</label>
            <Card alt='Ariana Grande' />
            <label>Travis Scott</label>
            <Card alt='Travis Scott' />
            <label>Steve Aoki</label>
            <Card alt='Steve Aoki' />


        </div>
    )
    
}