import './SalesCategories.css';
import { BsArrowUpCircle } from 'react-icons/bs';



export default function SalesCategories() {
    return(
    <div className='sales-categories-father'>
        <div className='center-box'>
        <div className='sales-categories-title'>
            <h2>Choose the category</h2>
        </div>


        &nbsp;<div className='sales-button'>
            <a href='/salesprice'>
                <button className='button-continues' type='submit'>Continue</button>
            </a>
            
            &nbsp;<BsArrowUpCircle />
        </div>
        </div>
        
    </div>
    )
}