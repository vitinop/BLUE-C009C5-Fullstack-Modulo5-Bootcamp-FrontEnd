import './Payment.css';
import Button from '../../components/Button/Button';


export default function Payment() {
    return(
        <div className="payment-center">
        <div className='payment-father'>
            <div className='payment-title'>
                <h2>Form of payment</h2>
            </div>
            <div className='payment-start'>
            <div className='payment-metod'>
                <label className='payment-metod-label'>Metod of payment: </label>
                &nbsp;<select>
                    <option>Credit Card</option>
                    <option>Criptocurrency</option>
                </select>
            </div>&nbsp;
            <div className='payment-number'>
                <label className='payment-metod'>Number of card/wallet: </label>
                <input className='input-payment' type='text' />
            </div>&nbsp;

            <div className='payment-shelflife'>
                <label className='payment-metod'>Card Validity: </label>
                <input className='input-payment' type='text' />
            </div>&nbsp;

            <div className='payment-cvv'>
                <label className='payment-metod'>CVV: </label>
                <input className='input-payment' type='text' />
            </div>&nbsp;

            <div className='payment-name'>
                <label className='payment-metod'>Cardholder Name: </label>
                <input className='input-payment' type='text' />
            </div>&nbsp;
            </div>
            
            <div className='payment-button'>
                <button className="button-payment"> Enviar </button>
            </div>&nbsp;            
            
        </div>
        </div>
    )
    
}