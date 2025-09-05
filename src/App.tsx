import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login/Login";
import Posts from "./pages/home/Posts";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div style={styles.routeStl}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/:id" element={<Posts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
const styles: Record<string, React.CSSProperties> = {
  routeStl: {
    width: window.innerWidth,
    height: window.innerHeight,
    margin: 0,
    alignItems: "center",
    textAlign: "center",
    flex: 1,
  },
};
