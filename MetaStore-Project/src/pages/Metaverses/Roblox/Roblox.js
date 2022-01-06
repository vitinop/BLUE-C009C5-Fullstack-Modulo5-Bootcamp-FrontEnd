import './Roblox.css';
import Card from '../../../components/Card/Card';
import RobloxCategories from './RobloxCategories';

export default function Roblox() {
    return(
        <div className='roblox-father'>
            <div className='roblox-title'>
                <img src='https://logosmarcas.net/wp-content/uploads/2020/11/Roblox-Logo.png' alt='roblox-logo'></img>
                <p>Roblox</p>
            </div>

            <div className='roblox-description'>
                <img src='https://a-static.mlcdn.com.br/1500x1500/painel-de-festa-roblox-02-colormyhome/colormyhome/2347/074359f8bed83dfa31f4d16a78f211d1.jpg' alt='roblox slider'></img>
                <p>Roblox is the name of the 3D gaming platform that allows the user to either play other people's productions or create their own.</p>
            </div>

            <RobloxCategories />
            <label>Nikeland</label>
            <Card alt='Nikeland' />
            <label>Gucci</label>
            <Card alt='Gucci' />
            <label>Louis Vitton</label>
            <Card alt='Louis Vitton' />


        </div>
    )
    
}