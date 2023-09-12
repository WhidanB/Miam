import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipee from "./pages/Recipee"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recette" element={<Recipee/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
