import './SalesPublic.css';
import { BsCheckCircle, BsArrowUpCircle } from 'react-icons/bs';

export default function SalesPublic() {
    return(
        <div className='sales-public-center'>
        <div className='sales-public-father'>
            <div className='sales-public-icon'>
                <BsCheckCircle />&nbsp;
                <h2>Published advertisement</h2>
            </div>

            <div className='sales-public-product'>
                <img src='' alt=''/>
                <h5 className='center-h5's>Value:</h5>
                <h5 className='center-h5'>Product's name:</h5>
                <h5 className='center-h5'>Brand:</h5>
            </div>&nbsp;

            <div className='sales-button'>
                <button className='button-public' type='submit'>View</button>&nbsp;
                <a href='/salesdescription'>
                &nbsp;<button className='button-public-other' type='submit'>Publish other product</button>
                </a>
                
            </div>
            <BsArrowUpCircle />
        </div>
        </div>
        
    )
}