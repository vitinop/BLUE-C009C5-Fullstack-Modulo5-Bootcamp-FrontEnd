import './Card.css';
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Card(props) {

  const navigate = useNavigate();

    const goToProductPage = () => {
        navigate('/product', { state: props.id })
    }

    const wishProduct = () => {
        const token = localStorage.token;
        const config = {
        headers: { Authorization: `Bearer ${token}`}
        }
        const id = props.id;

        axios.get(`/product/wishlist/${id}`, config)
    }

  return (
    <div className='cards'>



      <div className='cards-item' onClick={goToProductPage}>
        <div className='cards-image'>
          <img src={props.gallery} alt={props.name_product}></img>
        </div>
        <h2 className='cards-title'>{props.name_product}</h2>
        <span className='cards-price'>{props.price}</span>
      </div>



      <button className='wishlist' onClick={wishProduct}>
        <FaRegHeart />
      </button>
    </div>
  )
}