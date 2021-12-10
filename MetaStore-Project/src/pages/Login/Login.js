import "./Login.css";

export default function login() {
  return (
    <div className="center">
      <main className="loginContainer">
        <h2>Login</h2>
        <form action="">
          <div className="input-field">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Your Username or E-mail"
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="checkbox-keep-conected">
            <input type="checkbox" />
            &nbsp;Keep Conected?
          </div>
          <div className="conectionError">
            *Invalid username,email or password, please try again!
          </div>
          <input type="submit" value="Continue" />

          <div className="passwordRecovery">
            <a
              clasName="passwordRecoverylink"
              href="/passwordRecovery"
              id="to-passwordRecovery"
              aria-label="password-recovery"
            >
              Forgot your password?
            </a>
          </div>

          <div className="createAccountText">
            Not a member? It's free and easy to use.
          </div>
          <a
            clasName="signUplink"
            href="/createAccount"
            id="to-register"
            aria-label="create-an-account"
          >
            Sign-Up
          </a>
        </form>
      </main>
    </div>
  );
}
