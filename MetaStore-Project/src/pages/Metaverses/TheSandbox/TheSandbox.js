import './TheSandbox.css';


export default function TheSandbox() {
    return(
        <div className='thesandbox-father'>
            <div className='thesandbox-logo'>
                <img src='https://upload.wikimedia.org/wikipedia/fr/b/b7/The_Sandbox_Logo.png' alt='thesandbox-logo'></img>
                <p>The Sandbox</p>
                
            </div>

            <div className='thesandbox-description'>
                <img src='https://gkpb.com.br/wp-content/uploads/2021/11/gkpb-the-sandbox-1024x576.jpg' alt='thesandbox slider'></img>
                <p>A virtual universe where you can buy land and create virtual items that add to that heightened experience.</p>
            </div>

            <div className='thesandbox-cat'>
                <a className='thesandbox-categories' href='/theSandboxLand'>Lands</a>
                
                <a className='thesandbox-categories' href='/theSandboxHouses'>Houses</a>   
            </div>
            
            
        </div>
    )
    
}