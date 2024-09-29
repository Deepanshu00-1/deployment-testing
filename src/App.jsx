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

function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <><App /></>,
//     },
//     {
//       path: "./login",
//       element: <><LoginForm /></>,
//     },
//     {
//       path: "./signup",
//       element: <><SignUpForm /></>,
//     }
// ])
const [item, setItem] = useState([]);


  return(
    <>  
    <itemContext.Provider value={{item,setItem}}>
      <div>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/pages" element={<Pages />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      </div>
      {/* <Hero/> */}
      {/* <Foods/> */}
      {/* <RouterProvider router={router}/> */}
      </itemContext.Provider>
    </>
  )
}

export default App
