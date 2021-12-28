import './Fortnite.css';
import Slider from '../../../components/Slider/Slider';
import Card from '../../../components/Card/Card';

export default function Fortnite() {
    return(
        <div className='fortnite-father'>
            <div className='fortnite-title'>
                <img src='https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/35257.png' alt='fortnite-logo'></img>
                <p>Fortnite</p>
            </div>

            <div className='fortnite-description'>
                <img src='https://mais.opovo.com.br/_midias/jpg/2021/10/27/fortnite-17356546.jpg' alt='fortnite slider'></img>
                <p>O Fortnite evoluiu de um simples game para uma plataforma de socialização, que promove até mesmo shows de músicos famosos.</p>
            </div>

            <Card />
            <Card />
            <Card />


        </div>
    )
    
}