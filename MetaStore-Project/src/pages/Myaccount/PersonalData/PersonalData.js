import "./PersonalData.css";

export default function PersonalData() {
  return (
    <div className="center-PersonalData">
      <main className="personalDataContainer">
        <h2>Personal Data</h2>
        <form action="">
          <p>Full Name</p>
          <div className="input-field-personalData">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="nome_do_usuário"
            />
          </div>
          <p>Social Name / Nick Name</p>
          <div className="input-field-personalData">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="nickname_do_usuário"
            />
          </div>

          <p>Cellphone</p>
          <div className="input-field-personalData">
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="telefone_user_db"
            />
          </div>

          <p>Personal description</p>
          <div className="input-field-personalData">
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="telefone_user_db"
            />
          </div>

          <input type="button" value="Edit / Update Personal Data" />
        </form>
      </main>
    </div>
  );
}
