import './BarSearch.css';
import { BiSearch } from 'react-icons/bi';

export default function BarSearch() {
    return(
        <div className='barsearch-father'>
            <BiSearch />
            <div className='barsearch-input'>
                <input type='text' placeholder='search the metastore'></input> 
            </div>
        </div>
    )

}


            