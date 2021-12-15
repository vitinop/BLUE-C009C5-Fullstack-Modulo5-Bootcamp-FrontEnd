import './Product.css';
import Button from '../../components/Button/Button';

export default function Product() {
    return(
        <div className='product-father'>
            <div className='product-title'>
                <h2>Name of product</h2>
                <img src='' alt='product'>Carrossel</img>
                <Button />
            </div>
            <div className='button-details'>
                <Button />
                <Button />
                <Button />
                <Button />
            </div>
            <div className='product-description'>
                <h5>Description</h5>
            </div>
            <div className='product-seller-profile'>
                <h1>CHAMAR O COMPONENTE DO PERFIL PRIVADO. APENAS OS ELEMENTOS IMAGEM, NOME DO VENDEDOR E QUALIFICAÇÃO</h1>
            </div>
            <Button />
        </div>
    )
}