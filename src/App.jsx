import React from "react";
import "./Index.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";


// import { RouterProvider } from "react-router-dom";
// import routes from "./routes/routes";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster></Toaster>
      <Navbar/>
      
        <Routes>
            <Route exact path="/" element={<Products/>}/>
            <Route  path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
