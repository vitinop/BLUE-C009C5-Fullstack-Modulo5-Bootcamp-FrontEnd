import "./CreateAccount.css";

export default function CreateAccount() {
    return (
      <div className="center">
      <main className="loginContainer">
        <h2>Create an account</h2>
        <form action="">
          <div className="input-field">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your Username"
            />
          </div>
          <div className="input-field">
            <input
              type="email"
              name="e-mail"
              id="e-mail"
              placeholder="Enter your E-mail"
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
          <div className="input-field">
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Corfim the Password"
            />
           
          </div>
          
          <div className="checkbox-keep-conected">
          I agree to the terms of the and conditions of the <a clasName="subscriberAgreement" href="/subscriberAgreement" id="to-SubscriberAgreement" aria-label="subscriberAgreement">MetaStore Subscriber Agreement?</a>&nbsp;
            <input type="checkbox" />
          </div>
          <div className="conectionError">
            *Invalid username,email or password, please try again!
          </div>
          <input type="submit" value="Continue" />
                 
        </form>
      </main>
      </div>
    );
  }