import './SalesPrice.css';
import { BsArrowUpCircle } from 'react-icons/bs';


export default function SalesPrice() {
    return(
    <div className='sales-price-father'>
        <div className='sales-price'>
            <h2>What is the brand of your product?</h2>
            <h2>What is the price of your product?</h2>
            <h5>only when your product is sold will the commission be charged</h5>
        </div>
        <div className='sales-button'>
            <button className='button-public' type='submit'>Publish product</button>
        </div>
        <BsArrowUpCircle />
    </div>
    )
}