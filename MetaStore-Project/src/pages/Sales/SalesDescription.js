import './SalesDescription.css';
import { BsArrowUpCircle } from 'react-icons/bs';


export default function SalesDescription() {
    return(
    <div className='sales-father'>
        <div className='sales-title'>
            <h2>Sell new product</h2>
        </div>
        <div className='sales-images'>
            <img src='' alt='imagem 1'/>
            <img src='' alt='imagem 2'/>
            <img src='' alt='imagem 3'/>
            <img src='' alt='imagem 4'/>
            <img src='' alt='imagem 5'/>
        </div>

        <div className='sales-description'>
            <h2>Give your product a title</h2>
            <h5>ex: yellow Nike sneakers</h5>
            <h2>Describe your product</h2>
            <h5>ex: yellow Nike leather shoes, high soles, size 39, male, with shoelace.</h5>
        </div>
        <div className='sales-button'>
            <button className='button-continue' type='submit'>Continue</button>
        </div>
        <BsArrowUpCircle />
    </div>
    )
}