import './RecentSearch.css';
import { BiSearch } from 'react-icons/bi';


export default function RecentSearch() {
    return(
        <div className='recent-search-father'>
            <BiSearch />
            <div className='recent-search-input'>
                <input type='text' placeholder='search the metastore'></input>
                <h5>Cancel</h5> 
            </div>

            <div className='recent-search-list'>
                <h4>You're looking for:</h4>
                <h5>Recent search:</h5>

                <ul>
                    <li>Recent search 1</li>
                    <li>Recent search 2</li>
                    <li>Recent search 3</li>
                    <li>Recent search 4</li>
                    <li>Recent search 5</li>
                </ul>

            
            </div>
        </div>
    )
    
}