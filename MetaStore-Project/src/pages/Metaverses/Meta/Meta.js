import './Meta.css';


export default function Meta() {
    return(
        <div className='meta-father'>
            <div className='meta-logo'>
                <img src='https://logosmarcas.net/wp-content/uploads/2021/11/Meta-Symbolo.jpg' alt='meta-logo'></img>
                <p>Meta</p>
            </div>

            <div className='meta-description'>
                <img src='https://im.haberturk.com/2021/10/29/ver1635511393/3236478_810x458.jpg' alt='meta slider'></img>
                <p>The Meta bets on augmented and virtual reality as the future of social networks.</p>
            </div>

            <div className='meta-cat'>
                <a className='meta-categories' href='/metaAssessories'>Assessories</a>
                
                <a className='meta-categories' href='/metaWorkRoom'>Work Room</a>   
            </div>


        </div>
    )
    
}

