import "./App.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <h1>Home</h1>
      <button onClick={() => navigate("/test")}>Ir a test</button>
    </>
  );
}

export default App;
