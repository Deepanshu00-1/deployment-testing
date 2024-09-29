import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from "./Redux/Store.js"
import {Provider} from 'react-redux'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import LoginForm from './components/Login.jsx'
import SignUpForm from './components/SignUp.jsx'
import { BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <><App /></>,
//   },
//   {
//     path: "./login",
//     element: <><LoginForm /></>,
//   },
//   {
//     path: "./signup",
//     element: <><SignUpForm /></>,
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>,
    </BrowserRouter>
  </React.StrictMode>,
)
