import "./PasswordRecovery.css";

import { BiMailSend } from "react-icons/bi";

export default function PasswordRecoveryCheckout() {
  return (
    <div className="center-passwordRecovery">
      <main className="passwordRecoveryContainer">
        <h2>Check your mail</h2>
        <p>We have sent a password recover instructions to your e-mail</p>
        <div className="sendMailIco">
          <BiMailSend size={100} />
        </div>
        <p>
          Did not receive the email? Check your spam filter or{" "}
          <a
            className="passwordRecoveryCheckOut"
            href="/passwordRecovery/checkout"
            id="to-passwordRecoveryCheckout"
            aria-label="password-recovery-checkout"
          >
          try to send again
          </a>
        </p>
      </main>
    </div>
  );
}
