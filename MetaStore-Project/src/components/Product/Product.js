import './Product.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../components/Button/Button';

export default function Product() {

    const state = useLocation()
    const id = state.state;

    const [product, setProduct] = useState({})
    const [mounted, setMounted] = useState(false)

    const getData = async () => {
        await axios.get(`/product/find/${id}`)
        .then(response => {
        if(mounted) {
            setProduct(response.data)
            console.log(product)
        }
        })
    }

    useEffect(() => {
        setMounted(true)
        getData()
    }, [mounted])
    
    return(
        <div className='product-father'>
            <div className='product-title'>
                <p>{product.name}</p>
                <img src={product.image} alt='product'>{product.name}</img>
                <Button />
            </div>

            <div className='product-price'>
                <p>{product.price}</p>
                <Button />
            </div>

            <div className='button-details'>
                <Button />
                <Button />
                <Button />
                <Button />
            </div>

            <div className='product-description'>
                <p>{product.description}</p>
            </div>

            
            <div className='product-main-image'>
                <p>{product.main_image}</p>
                <img src={product.main_image} alt='product'>{product.name}</img>
            </div>

            <div className='product-seller-profile'>
                <h1>CHAMAR O COMPONENTE DO PERFIL PRIVADO. APENAS OS ELEMENTOS IMAGEM, NOME DO VENDEDOR E QUALIFICAÇÃO</h1>
            </div>
            <Button />
        </div>
    )
}