import "./Wallet.css";

export default function Wallet() {
    return(
        <div classname="wallet-father">
            <div classname="wallet-title">
                <p>My Wallet</p>
                <h1>USD $100,00</h1>
            </div>

            <div className="form-payment">
                <p>Payment methods</p>
                <ul>
                    <li>Deposit</li>
                    <li>Withdraw</li>
                    <li>Transfer</li>
                </ul>

            </div>

            <div className="credit-card">
                <label>Credit Card</label>
                <p>Finished in 9999</p>
                <p>Due date: 11/23</p>
                <p>Delete</p>
            </div>

            <div className="paypall">
                <label>PayPall</label>
                <p>Not Loged-in</p>
                
            </div>

        </div>
    );
}
