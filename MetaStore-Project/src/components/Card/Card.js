import './Card.css';
import { FaRegHeart } from 'react-icons/fa';

export default function Card() {

  return (
    <div className='card'>

      <div className='card-item'>
        <div className='card-image'>
          <img src='https://media.seudinheiro.com/cdn-cgi/image/fit=contain,width=640&,format=auto/uploads/2021/11/metaverso-realidade-virtual-628x353.jpg' alt='card-item'></img>
        </div>
        <h2 className='card-title'>Nome do item</h2>
        <span className='card-preco'>Preço</span>
      </div>

      <button className='wishlist'>
        <FaRegHeart />
      </button>
    </div>
  )
}