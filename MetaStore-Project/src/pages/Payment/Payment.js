import './Payment.css';
import Button from '../../components/Button/Button';


export default function Payment() {
    return(
        <div className='payment-father'>
            <div className='payment-title'>
                <h2>Form of payment</h2>
            </div>

            <div className='payment-metod'>
                <label className='payment-metod-label'>Metod of payment: </label>
                <select>
                    <option>Credit Card</option>
                    <option>Criptocurrency</option>
                </select>
            </div>
            <div className='payment-number'>
                <label className='payment-number-label'>Number of card/wallet: </label>
                <input type='text' />
            </div>

            <div className='payment-shelflife'>
                <label className='payment-shelflife-label'>Shelf life: </label>
                <input type='text' />
            </div>

            <div className='payment-cvv'>
                <label className='payment-cvv-label'>CVV: </label>
                <input type='text' />
            </div>

            <div className='payment-name'>
                <label className='payment-name-label'>Cardholder Name: </label>
                <input type='text' />
            </div>
            
            <div className='payment-button'>
                <Button />
                <h1>INCLUIR TEXTO ARGUMENTO NO BOTÃO</h1>
            </div>            
            
        </div>
    )
    
}