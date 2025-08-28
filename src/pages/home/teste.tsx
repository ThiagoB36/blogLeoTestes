import "../../App.css";
export default function Home() {
  const pub = [
    {
      title: "Como usar React",
      text: "Aprenda os fundamentos da biblioteca React.js...",
    },
    {
      title: "10 hábitos saudáveis",
      text: "Dicas simples para uma vida mais equilibrada...",
    },
    {
      title: "Mercado de Criptos",
      text: "O que você precisa saber antes de investir...",
    },
    {
      title: "Estudos e produtividade",
      text: "Métodos modernos para manter o foco nos...",
    },
    {
      title: "Como usar React",
      text: "Aprenda os fundamentos da biblioteca React.js...",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <header>
        <div
          style={{
            width: "25%",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "50px",
          }}
        >
          <div className="logo">MeuBlog</div>

          <div className="menu">
            <select>
              <option>Categorias ▼</option>
              <option>Tecnologia</option>
              <option>Estilo de Vida</option>
              <option>Negócios</option>
              <option>Educação</option>
              <option>Saúde</option>
              <option>Entretenimento</option>
            </select>
          </div>
        </div>

        <button className="login-btn">Login</button>
      </header>

      {/* CONTEÚDO */}
      <main>
        {pub.map((item) => {
          return (
            <div className="card">
              <div className="card-img"></div>
              <div className="card-content">
                <div className="card-title">{item.title}</div>
                <div className="card-desc">{item.text}</div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
