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

        <div className="missPassword">Forgot your password?</div>
        <div className="createAccount">
          Not a member? It's free and easy to use.
        </div>
        <a clasName="signInlink" href="#" id="to-register" aria-label="Cadastrar">Sign-In</a>
        
      </form>
    </main>
    </div>
  );
}
