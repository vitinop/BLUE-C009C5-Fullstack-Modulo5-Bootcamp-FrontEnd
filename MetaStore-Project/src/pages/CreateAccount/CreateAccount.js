import "./CreateAccount.css";
import axios from "axios";
import { useState } from "react";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      nick_name: nickname,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
      profile_picture: "https://unileao.edu.br/wp-content/themes/portalv2.0/img/perfil.png",
      description: "Empty description",
      status: "Active",
      seller: true,
      banner: "https://dtechted.com/wp-content/uploads/2021/11/meta-banner.webp",
      average_qualification: 0,
      counter_views_store: 0,
      role: "user"
    };

    axios.post("api/user", user).then((response) => console.log(response));
  };

  return (
    <div className="center-CreateAccount">
      <main className="createAccountContainer">
        <h2>Create an account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-field-CreateAcc">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter your full name"
              required
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="input-field-CreateAcc">
            <input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Enter your nickname"
              required
              onChange={(event) => setNickname(event.target.value)}
            />
          </div>
          <div className="input-field-CreateAcc">
            <input
              type="email"
              name="e-mail"
              id="e-mail"
              placeholder="Enter your E-mail"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          Password
          <div className="input-field-CreateAcc">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          Password Confirmation
          <div className="input-field-CreateAcc">
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Confirm the Password"
              required
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
          </div>
          <div className="checkbox-agree">
            <input type="checkbox" required />
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
          <input type="submit" value="Continue" />
        </form>
      </main>
    </div>
  );
}
