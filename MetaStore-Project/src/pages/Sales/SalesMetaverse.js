import './SalesMetaverse.css';
import { BsArrowUpCircle } from 'react-icons/bs';
import Relations from '../../components/Relations/Relations';


export default function SalesMetaverse() {
    return(
    <div className='sales-metaverse-father'>
        <div className='sales-metaverse-title'>
            <h2>What metaverse does your product belong to?</h2>
        </div>

        <Relations />

        <div className='sales-button'>
            <button className='button-continue' type='submit'>Continue</button>
        </div>
        <BsArrowUpCircle />
        
    </div>
    )
}