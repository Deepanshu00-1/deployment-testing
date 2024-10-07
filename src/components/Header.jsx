import {NavLink} from "react-router-dom"

import Logo from "../assets/restaurantLogo.png"
// #FFB41D
// #061E5C
import React, { useState, useEffect,useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {toggle, setTrue, setFalse} from "../Redux/counter/booleanSlice"

import { useForm } from "react-hook-form";


function Header(){

    const [responsiveNav, setResponsiveNav] = useState('none')

    const customClass = {
        display: responsiveNav,
    }

    const openNav = ()=>{
        setResponsiveNav('flex');
    }
    const closeNav = ()=>{
        setResponsiveNav('none');
    }


    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    const[loginVisible, setLoginVisible] = useState(false);
    const[signupVisible, setSignupVisible] = useState(false);

    const showLogin=()=>{
        setLoginVisible(!loginVisible)
    }
    const closeLogin=()=>{
        setLoginVisible(!loginVisible)
    }
    const showSignup=()=>{
        setSignupVisible(!signupVisible)
    }
    const closeSignup=()=>{
        setSignupVisible(!signupVisible)
    }
    const switchForm=()=>{
        setLoginVisible(!loginVisible)
        setSignupVisible(!signupVisible)
    }
    const {
        register,
        handleSubmit,
        watch,
        formState:{errors},
    } = useForm();

    const onSubmit=(data)=>{
        console.log(data);
    }

    return(
        <>
        <header>
            
            <div className="nav-part1">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="nav-part2">
                <h3>
                    <NavLink to="/" exact activeclassname="active">
                    Home 
                    </NavLink>
                </h3>
                <h3>
                    <NavLink to="/menu" activeclassname="active">
                        Menu 
                    </NavLink>
                </h3>
                <h3 className = "pagesNav" >
                    <NavLink to="/pages"  activeclassname="active">
                        Pages 
                    </NavLink>
                </h3>
                <div className="cart-icon">
                    <NavLink to ="/cart" activeclassname="active">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className="cartNotification">{count}</div>
                    </NavLink>
                </div>
            </div>
            <div className="nav-part3">
                <div className="searchIcon">
                    <input type="text" name="search" placeholder="Search..."/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    
                </div>
                <div className="loginBtn">
                    <button onClick={showLogin}>Login</button>
                    <i className="fa-solid fa-bars" onClick ={openNav}></i>
                </div>
            </div>
        </header>
        <div className="responsiveNav" style={customClass}>
            <i className="fa-solid fa-arrow-right" id="closeIcon" onClick={closeNav}></i>
            <div className="nav1">
            <h3>Home</h3>
            <h3>Menu</h3>
            <h3 className="contact">Contact</h3>
            </div>
            <div className="nav2">
                <button >Login</button>
                <div></div>
                <button>Sign up</button>
            </div>
        </div>

        <div className="login" style={{display:loginVisible?"flex":"none"}}>
        <span  id="closeIcon" onClick={closeLogin}><i className="fa-solid fa-xmark" ></i></span>
            <h1>Login</h1>
            <div className="input">
                <input type="text" placeholder="      username or email address..."{...register("username", {required:true, minLength:{value: 4, message:"min length is 4"}, maxLength:{value: 8, message:"max length is 8"}})}/>
                {errors.username && <div style={{fontSize:"12px", color:"red"}}>{errors.username.message}</div>}
                <input type="password" placeholder="      Password..."/>
                <button type="submit" onSubmit={handleSubmit(onSubmit)}>Submit</button>
            </div>
            <div className="btn">
                <p>Don't Have An Account? <button onClick={switchForm}>Signup</button></p>
            </div>
        </div>

        <div className="signup" style={{display: signupVisible?"flex":"none"}}>
            <span  id="closeIcon" onClick={closeSignup} ><i className="fa-solid fa-xmark"></i></span>
            <h1>SignUp</h1>
            <div className="input">
                <input type="text" placeholder="      username or email address..."/>
                <input type="text" placeholder="      Password..."/>
                <input type="text" placeholder="      ConfirmPassword..."/>
                <button>Submit</button>
            </div>
            <div className="btn">
                <p>Already Have An Account? <button onClick={switchForm}>SignIn</button></p>
            </div>
        </div>
        </>
    )
}
export default Header