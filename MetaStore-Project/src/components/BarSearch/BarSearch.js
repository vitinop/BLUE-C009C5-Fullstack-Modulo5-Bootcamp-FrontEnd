import './BarSearch.css';
import { BiSearch } from 'react-icons/bi';

export default function BarSearch() {
    return(
        <div className='center-barsearch'>
            <div className='barSearch-father'>
                <form className='barSearch-input'>
                    <input type='text' className='barSearch-text' placeholder='Enter a product name'></input>

                    <a href='/search'><button className='btnSearch' type='submit'><BiSearch/></button> </a>
                               
                </form>
            </div>
        </div>
    )

}

