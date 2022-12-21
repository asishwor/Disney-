import { useState } from "react";
import { GlobalStyle } from "./components/globalStyle/GlobalStyle";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Home />
      
    </>
  );
}

export default App;
