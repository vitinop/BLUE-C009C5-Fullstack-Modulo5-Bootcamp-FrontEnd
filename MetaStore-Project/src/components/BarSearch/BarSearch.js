import './BarSearch.css';
import { BiSearch } from 'react-icons/bi';

export default function BarSearch() {
    return(
        <div className='barsearch-father'>
            <div className='barsearch-input'>
            <BiSearch />&nbsp;
                <input className='bartext' type='text' placeholder='search the metastore'></input> 
            </div>
        </div>
    )

}


            