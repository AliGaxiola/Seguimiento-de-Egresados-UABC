import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Test() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>LLegaste a test!!</h1>
      <button onClick={() => navigate("/")}>Ir a Home</button>
      <Link to={"/"}>Hola</Link>
    </div>
  );
}

export default Test;
