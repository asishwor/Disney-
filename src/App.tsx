import { useState } from "react";
import { GlobalStyle } from "./components/globalStyle/GlobalStyle";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./components/details/Details";
import Header from "./components/Header/Header";
import Login from "./components/login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
