import './Cart.css';
import CardCart from '../../components/CardCart/CardCart';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cart() {
    return(
        <div className="center-cart">
            <div className="cart">
                <h2>Shopping cart</h2>
                <div className="cart-card">
                    <CardCart></CardCart>
                    <CardCart></CardCart>
                    <CardCart></CardCart>
                </div>
                <div className="cart-button">
                    <button className="cartbutton" >Discount coupon</button>
                    <button className="cartbutton" >Amount</button>
                </div>
                <a href='/payment'><button className="cartbutton" >Checkout</button></a>
                    
            </div>
        </div>
    )
    
}