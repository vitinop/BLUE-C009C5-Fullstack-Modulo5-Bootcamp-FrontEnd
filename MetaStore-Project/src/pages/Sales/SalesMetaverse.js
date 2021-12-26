import './SalesMetaverse.css';
import { BsArrowUpCircle } from 'react-icons/bs';
import Relations from '../../components/Relations/Relations';


export default function SalesMetaverse() {
    return(
    <div className='sales-metaverse-father'>
        <div className='center-box'>
        <div className='sales-metaverse-title'>
            <h2>What metaverse does your product belong to?</h2>
        </div>

        <Relations />

        
        <div className='sales-button'>
            <a href='/salescategories'>
                <button className='button-continues' type='submit'>Continue</button>
            </a>
            &nbsp;<BsArrowUpCircle />
        </div>
    </div>
        
    </div>
    )
}