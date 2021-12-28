import Container from '../../Components/Container/Container';
import Card from '../../Components/Card/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Wishlist() {

    const [wishList, setWishList] = useState([]);
    const [mounted, setMounted] = useState(false)
    const [notLogged, setNotLoggend] = useState(true)

    useEffect(() => {
        setMounted(true)

        if(localStorage.token) {
        const token = localStorage.token;

        const config = {
            headers: { Authorization: `Bearer ${token}`}
        }

        axios.get('/product/myWishList', config)
        .then(response => {
            setNotLoggend(false)
            setWishList(response.data.games)
        })
        }
    }, [mounted])

    return(
        <div className='wishlist-title'>
            <Container title='Wish List'>
            {
                wishList.map(product => (
                <Card 
                    id={product.id}
                    image={product.image}
                    title={product.name}
                    preco={product.price}
                    key={product.id}
                />
                ))
            }
            </Container>
        </div>
    )
}