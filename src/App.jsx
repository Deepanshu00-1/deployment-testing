import ReactDOM from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header"
import Hero from "./components/HeroSection"
import Foods from './components/Foods'

import { createBrowserRouter,RouterProvider } from "react-router-dom";
import LoginForm from "./components/Login";
import SignUpForm from "./components/SignUp";

import Home from "./Routing/Home";
import Menu from "./Routing/Menu";
import Pages from "./Routing/Pages";
import Cart from "./Routing/Cart";
import { useState } from "react";

import { itemContext } from "./context/context";
import { itemAddedContext } from "./context/addedItemContext";

function App() {
const [item, setItem] = useState([]);
let [addedItem, setAddedItem] = useState([]);


  return(
    <>  
    <itemContext.Provider value={{item,setItem}}>
    <itemAddedContext.Provider value={{addedItem, setAddedItem}}>

      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/pages" element={<Pages />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      </div>
    </itemAddedContext.Provider>
    </itemContext.Provider>
    </>
  )
}

export default App
