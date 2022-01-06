import './Card.css';
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function Card(props) {

  const navigate = useNavigate();

    const goToProductPage = () => {
        navigate('/home', { state: props.id })
    }

    const wishProduct = () => {
        const token = localStorage.token;
        const config = {
        headers: { Authorization: `Bearer ${token}`}
        }
        const id = props.id;

        axios.get(`/view/wish/${id}`, config)
    }

  return (
    <div className='cards'>

      <div className='cards-item' onClick={goToProductPage}>
        <div className='cards-image'>
          <img src={props.image} alt={props.title}></img>
        </div>
        <h2 className='cards-title'>{props.title}</h2>
        <span className='cards-price'>{props.price}</span>
      </div>

      <button className='wishlist' onClick={wishProduct}>
        <FaRegHeart />
      </button>
    </div>
  )
}