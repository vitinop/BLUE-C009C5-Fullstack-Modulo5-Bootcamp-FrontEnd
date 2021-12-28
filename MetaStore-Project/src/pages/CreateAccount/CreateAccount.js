import "./CreateAccount.css";
import { Link } from 'react-router-dom';

export default function CreateAccount() {
  return (
    <div className="center-CreateAccount">
      <main className="createAccountContainer">
        <h2>Create an account</h2>
        <form action="">

          <div className="input-field-CreateAcc">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter your Fullname"
            />
          </div>
          
          <div className="input-field-CreateAcc">
            <input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Enter your Nickname"
            />
          </div>
          <div className="input-field-CreateAcc">
            <input
              type="email"
              name="e-mail"
              id="e-mail"
              placeholder="Enter your E-mail"
            />
          </div>
          Password
          <div className="input-field-CreateAcc">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="passwordRecoveryText">
            Must be at least 8 charaters.
          </div>
          Password Confirmation
          <div className="input-field-CreateAcc">
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Corfim the Password"
            />
          </div>
          <div className="passwordRecoveryText"> 
          Both passwords mustmach.
          </div>

          <div className="checkbox-agree">
            <input type="checkbox" />
            &nbsp; I agree to the terms of the and conditions of the{" "}
            <a
              className="termsAndConditions"
              href="/termsAndConditions"
              id="to-termsAndConditions"
              aria-label="termsAndConditions"
            >
              MetaStore Subscriber Agreement?
            </a>
          </div>
          
          <Link to='/myaccount'>
              <button className="save" type="submit">Continue</button>
            </Link>
          
        </form>
      </main>
    </div>
  );
}
