import "./PasswordRecovery.css";

export default function PasswordRecovery() {
  return (
    <div className="center-passwordRecovery">
      <main className="passwordRecoveryContainer">
        <h2>Reset password</h2>

        <form className="PasswordRecovery-form">
          <p>
            Enter the email associated with your account and we'll send an email
            with the instructions to reset you password
          </p>

          <div className="input-field-passwordRecovery">
            <input
              type="email"
              name="email"
              id="username"
              placeholder="Enter your e-mail"
            />
          </div>
          
          <a
            className="passwordRecoveryCheckOut"
            href="/passwordRecovery/checkout"
            id="to-passwordRecoveryCheckout"
            aria-label="password-recovery-checkout"
          >
            <input type="submit" value="Send Instructions" />
          </a>
        </form>
      </main>
    </div>
  );
}
