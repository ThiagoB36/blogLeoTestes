import { database } from "../database/database";
import "../App.css";

export default function NavBar() {
  return (
    <header>
      <div style={styles.headerStl}>
        <div className="logo">MeuBlog</div>

        <div className="menu">
          <select>
            <option>Categorias</option>
            {database.categories.map((item, idx) => {
              return <option key={idx}>{item}</option>;
            })}
          </select>
        </div>
      </div>

      <button className="login-btn">Login</button>
    </header>
  );
}
const styles: Record<string, React.CSSProperties> = {
  headerStl: {
    width: "25%",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "50px",
  },
};
