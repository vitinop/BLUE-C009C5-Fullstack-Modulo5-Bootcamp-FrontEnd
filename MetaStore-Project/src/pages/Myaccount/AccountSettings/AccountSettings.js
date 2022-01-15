import "./AccountSettings.css";

export default function AccountSettings() {
  return (
    <div className="center-accountSetting">
      <main className="accountSettingsContainer">
        <h2>Account Settings</h2>
        <form action="">
          <p>UserName:</p>
          <div className="input-field-accountSettings">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="nome_do_usuário"
            />
          </div>
          <p>E-mail:</p>
          <div className="input-field-accountSettings">
            <input 
              type="email"
              name="e-mail"
              id="e-mail"
              placeholder="Enter your E-mail"
            />
          </div>

          <input type="button" value="Edit/ Update Account Data" />
          <input type="button" value="Change Password" />
        </form>
      </main>
    </div>
  );
}
