import './RecentSearch.css';
import { BiSearch } from 'react-icons/bi';


export default function RecentSearch() {
    return(
        <div className='recent-search-father'>
            <div className='recent-search-input'>
            <BiSearch />&nbsp;
                <input type='text' placeholder='search the metastore'></input>&nbsp;
                <h5>Cancel</h5> 
            </div>

            <div className='center-search-list'>
            <h4>You're looking for:</h4>
                <div className='recent-search-list'>
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
        </div>
    )
    
}