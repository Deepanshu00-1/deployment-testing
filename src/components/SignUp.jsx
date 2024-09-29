import "../css/signup.css"
import {useMemo, useState} from "react"
import {useSelector, useDispatch} from 'react-redux'
import { setTrue, setFalse, toggle } from '../Redux/counter/booleanSlice';
import { Link } from "react-router-dom";

function SignUpForm(){

    const boolean = useSelector((state)=>state.boolean.value);
    const dispatch = useDispatch();

    return(
        <div className="signup" style={{display: boolean? 'flex': 'none'}}>
            <span  id="closeIcon" ><i className="fa-solid fa-xmark"></i></span>
            <h1>SignUp</h1>
            <div className="input">
                <input type="text" placeholder="      username or email address..."/>
                <input type="text" placeholder="      Password..."/>
                <input type="text" placeholder="      ConfirmPassword..."/>
                <button>Submit</button>
            </div>
            <div className="btn">
                <p>Already Have An Account? <button>SignIn</button></p>
            </div>
        </div>
    )
}
export default SignUpForm