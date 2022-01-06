import './Cart.css';
import CardCart from '../../components/CardCart/CardCart';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cart() {
    return(
        <div className="center-cart">
            <div className="cart">
                <h2>Carrinho de Compras</h2>
                <div className="cart-card">
                    <CardCart></CardCart>
                    <CardCart></CardCart>
                    <CardCart></CardCart>
                </div>
                <div className="cart-button">
                    <button className="cartbutton" >Cupom de Desconto</button>
                    <button className="cartbutton" >Valor total</button>
                </div>
                    <button className="cartbutton" >Finalizar Compra</button>
            </div>
        </div>
    )
    
}