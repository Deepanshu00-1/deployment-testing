import "../css/login.css"
import {useMemo, useState} from "react"
import {useSelector, useDispatch} from 'react-redux'
import { setTrue, setFalse, toggle } from '../Redux/counter/booleanSlice';

import {Link} from 'react-router-dom'

const LoginForm =()=>{
    

    // const value = localStorage.getItem('value');

    const boolean = useSelector((state)=> state.boolean.value);
    console.log(boolean)

    const dispatch = useDispatch();

    const [loginVisible, setLoginVisible] = useState(true);
    const[signupVisible, setSignupVisible] = useState(false)

    // const closeLogin = ()=>{
    //     setLoginVisible(!loginVisible)
    // }
    // const SignUpVisible = ()=>{
    //     setSignupVisible(!signupVisible)
    // }
    const switchForm =()=>{
        dispatch(setTrue());
    }


    return(
        <>
        {/* Login */}
        <div className="login" style= {{display: boolean ? 'flex':'none'}}>
        <span  id="closeIcon" onClick={()=>dispatch(setFalse())}><i className="fa-solid fa-xmark" ></i></span>
            <h1>Login</h1>
            <div className="input">
                <input type="text" placeholder="      username or email address..."style={{fontSize:'24px'}} />
                <input type="text" placeholder="      Password..."/>
                <button>Submit</button>
            </div>
            <div className="btn">
                <p>Don't Have An Account? <button onClick={setTrue}>Signup</button></p>
            </div>
        </div>
        {/* Signup */}
        {/* <div className="signup" style={{display:'none'}}>
            <span  id="closeIcon" ><i className="fa-solid fa-xmark"></i></span>
            <h1>SignUp</h1>
            <div className="input">
                <input type="text" placeholder="      username or email address..."/>
                <input type="text" placeholder="      Password..."/>
                <input type="text" placeholder="      ConfirmPassword..."/>
                <button>Submit</button>
            </div>
            <div className="btn">
                <p>Already Have An Account? <a href="">SignIn</a></p>
            </div>
        </div> */}
        </>
    )
}
export default LoginForm
