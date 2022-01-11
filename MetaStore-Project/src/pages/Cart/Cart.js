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
                    <span className="cartbutton" >Cupom de Desconto</span>
                    <span className="cartbutton" >Valor total</span>
                </div>
                    <a clasName="nav-Links" href="/payment" id="to-payment" aria-label="Finalizar">Finalizar Compra</a>
            </div>
        </div>
    )
    
}