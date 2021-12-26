import './BarSearch.css';
import { BiSearch } from 'react-icons/bi';

export default function BarSearch() {
    return(
        <div className='barSearch-father'>
            <form className='barSearch-input'>
                <input type='text' className='barSearch-text' placeholder='Enter a product name'></input>
                
                <button className='btnSearch'><BiSearch/></button>         
                
            </form>
        </div>
    )

}


            