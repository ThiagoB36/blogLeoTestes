import "../../App.css";
import "./home.css";
import { database } from "../../database/database";
import { useNavigate } from "react-router";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* HEADER */}
      <header>
        <div style={styles.headerStl}>
          <div className="logo">MeuBlog</div>

          <div className="menu">
            <select>
              {database.categories.map((item, idx) => {
                // if (item == "Categorias") {
                // return <option disabled>{item}</option>;
                // } else {
                return <option key={idx}>{item}</option>;
                // }
              })}
            </select>
          </div>
        </div>

        <button className="login-btn">Login</button>
      </header>

      {/* CONTEÚDO */}
      <main>
        {database.posts.map((item, idx) => {
          const txt = item.text.slice(0, 60) + " ...";
          const id = item.id;
          const handle = () => {
            console.log("clicado ", { idx });
            navigate(`posts/${id}`);
          };
          return (
            <button key={idx} onClick={handle} className="card">
              <img src={item.imageUrl} className="imgStl" />
              <div className="card-content">
                <div className="card-title">{item.title}</div>
                <div className="card-desc">{txt}</div>
              </div>
            </button>
          );
        })}
      </main>
    </>
  );
}
const styles: Record<string, React.CSSProperties> = {
  headerStl: {
    width: "25%",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "50px",
  },
  imgStl: {
    width: "60px",
    height: "60px",
    borderRadius: "8px",
    objectFit: "cover",
  },
};
