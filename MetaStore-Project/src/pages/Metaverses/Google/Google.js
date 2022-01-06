import './Google.css';
import GoogleCategories from '../Google/GoogleCategories';
import Card from '../../../components/Card/Card';

export default function Google() {
    return(
        <div className='google-father'>
            <div className='google-title'>
                <img src='https://logosmarcas.net/wp-content/uploads/2020/09/Google-Emblema.png' alt='google-logo'></img>
                <p>Google</p>
            </div>

            <div className='google-description'>
                <img src='https://static1.srcdn.com/wordpress/wp-content/uploads/2021/12/Google-Metaverse.jpg' alt='metaverse google'></img>
                <p>The company's bet for the popularization of virtual reality is the so-called cardboard, a kind of cardboard box in which it is possible to place a cell phone, which will transmit the content of the virtual reality experience, at a much lower cost.</p>
            </div>

            <GoogleCategories />
            <label>Cardboard</label>
            <Card alt='cardbord' />

        </div>
    )
    
}