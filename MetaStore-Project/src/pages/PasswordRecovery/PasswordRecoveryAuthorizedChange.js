import "./PasswordRecovery.css";

export default function PasswordRecoveryAuthorizedChange() {
  return (
    <div className="center-passwordRecovery">
      <main className="passwordRecoveryContainer">
        <h2>Create new password</h2>

        <p>Your new password must be different from your previous password</p>
        <form action="">
          Password
          <div className="input-field-passwordRecovery">
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
              name="password"
              id="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="passwordRecoveryText"> 
          Both passwords mustmach.
          </div>
          <input type="submit" value="Continue" />
        </form>
      </main>
    </div>
  );
}
