import './SalesDescription.css';
import { BsArrowUpCircle } from 'react-icons/bs';


export default function SalesDescription() {
    return(
    <div className='sales-father'>
        <div className='sales-title'>
            <h2>Sell new product</h2>
        </div>
        <div className='sales-images'>
            <div className='centerall'>
                <p>Insert an image</p>
                <img src='https://altavista.news/wp-content/uploads/2021/12/metaverso-vendas.png' alt='yacht'/>
                
            </div>
        </div>

        <div className="sales-description">
            <h2>Give your product a title</h2>
            <h5>ex: yellow Nike sneakers</h5>
            <h2>Describe your product</h2>
            <h5>ex: yellow Nike leather shoes, high soles, size 39, male, with shoelace.</h5>
        </div>
        <div className="sales-button">
            <a href="salesmetaverse">
                <button className="button-continue" type="submit">Continue</button>
            </a>
        </div>
        &nbsp;
        <BsArrowUpCircle />
    </div>
    )
}