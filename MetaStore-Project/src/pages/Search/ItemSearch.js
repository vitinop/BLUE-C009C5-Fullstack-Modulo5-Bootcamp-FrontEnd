import './ItemSearch.css';
import Product from '../../components/Product/Product';
import { GrFavorite } from 'react-icons/gr';
import { BsHandbag } from "react-icons/bs";
import { FaPlus } from 'react-icons/fa';




export default function ItemSearch() {
    return(
        <div className='item-search-father'>
            <div className='item-search-input'>
                <input type='text' placeholder='NOME DO ITEM DA BUSCA'></input>
                <h5>Cancel</h5> 
            </div>
            <Product />
            <div className='item-search'>
                <h1>CHAMAR APENAS OS ELEMENTOS NOME DO PRODUTO, NOME DO METAVERSO E VALOR</h1>
            </div>
            <div className='item-search-icons'>
                <FaPlus />
                <GrFavorite />
                <BsHandbag />
            </div>
        </div>

    )
    
}