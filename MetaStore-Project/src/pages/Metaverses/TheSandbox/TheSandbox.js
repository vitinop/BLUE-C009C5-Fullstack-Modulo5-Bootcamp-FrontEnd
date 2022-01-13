import './TheSandbox.css';
import Card from '../../../components/Card/Card';
import TheSandboxCategories from './TheSandboxCategories';

export default function TheSandbox() {
    return(
        <div className='thesandbox-father'>
            <div className='thesandbox-title'>
                <img src='https://upload.wikimedia.org/wikipedia/fr/b/b7/The_Sandbox_Logo.png' alt='thesandbox-logo'></img>
                <p>The Sandbox</p>
            </div>

            <div className='thesandbox-description'>
                <img src='https://gkpb.com.br/wp-content/uploads/2021/11/gkpb-the-sandbox-1024x576.jpg' alt='thesandbox slider'></img>
                <p>A virtual universe where you can buy land and create virtual items that add to that heightened experience.</p>
            </div>

            <label>Land</label>
            <a href='/theSandboxLand'><Card alt='land' /></a>
            
            <label>Real estate</label>
            <a href='/theSandboxRealState'><Card alt='land' /></a>
            
        </div>
    )
    
}