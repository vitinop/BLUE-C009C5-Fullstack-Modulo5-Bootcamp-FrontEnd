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
            <img src='https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg?h=720&resize=1&w=1280' alt='imagem 1'/>
            <img src='https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg?h=720&resize=1&w=1280' alt='imagem 2'/>
        </div>
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
        &nbsp;
        <BsArrowUpCircle />
    </div>
    )
}