import './SalesCategories.css';
import { BsArrowUpCircle } from 'react-icons/bs';
import Relations from '../../components/Relations/Relations';


export default function SalesCategories() {
    return(
    <div className='sales-categories-father'>
        <div className='sales-categories-title'>
            <h2>Choose the category</h2>
        </div>

        <Relations />

        <div className='sales-button'>
            <button className='button-continue' type='submit'>Continue</button>
        </div>
        <BsArrowUpCircle />
        
    </div>
    )
}