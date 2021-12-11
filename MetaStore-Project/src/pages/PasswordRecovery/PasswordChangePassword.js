import "./PasswordRecovery.css";

export default function PasswordRecoveryChangePassword() {
  return (
    <div className="center-passwordRecovery">
      <main className="passwordRecoveryContainer">
        <h2>Change Password</h2>

        <form action="">
          Old Password
          <div className="input-field-passwordRecovery">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
            />
          </div>
          <br/> <br/> <br/> 

          New Password
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
          New Password Confirmation
          <div className="input-field-CreateAcc">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="passwordRecoveryText">Both passwords mustmach.</div>
          <input type="submit" value="Continue" />
        </form>
      </main>
    </div>
  );
}
