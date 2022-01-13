import './Descentraland.css';

export default function Descentraland() {
    return(
        <div className='descentraland-father'>
            <div className='descentraland-logo'>
                <img src='https://www.criptofacil.com/wp-content/uploads/2021/12/metaverso-decentraland-tera-versao-virtual-do-ano-novo-da-times-square.jpg' alt='descentraland-logo'></img>
                <p>Descentraland</p>
        
            </div>

            <div className='descentraland-description'>
                <img src='https://tm.ibxk.com.br/2021/12/28/28091517233004.jpg?ims=1120x420' alt='descentraland slider'></img>
                <p>Metaverse that commercializes virtual lands and promotes events.</p>
            </div>

            <div className='descentraland-cat'>
                <a className='descentraland-categories' href='/descentralandLand'>Lands</a>
                
                <a className='descentraland-categories' href='/descentralandEvents'>Events</a>   
            </div>

        </div>
    )
    
}