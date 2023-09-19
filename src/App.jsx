import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipee from "./pages/Recipee";

import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Alphabet from "./pages/Alphabet";



const App = () => {

  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recette/:id" element={<Recipee />}></Route>
        <Route path="/categories" element={<Categories/>}></Route>
        <Route path="/category/:id" element={<Category />}></Route>
        <Route path="/alphabet" element={<Alphabet />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
