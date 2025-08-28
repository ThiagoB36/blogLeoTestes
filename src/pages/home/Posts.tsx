import { useParams } from "react-router";
import { database } from "../../database/database";
import "../../App.css";
import "./home.css";

export default function Posts() {
  const { id } = useParams();
  console.log({ id });
  const filter = database.posts.filter((item) => item.id == id);
  console.log({ filter });
  const data = filter[0];

  return (
    <div>
      <h1>Post {id}</h1>
      <img src={data.imageUrl} className="imgStl" />
      <div className="card-content">
        <div className="card-title">{data.title}</div>
        <div className="card-desc">{data.text}</div>
      </div>
    </div>
  );
}
