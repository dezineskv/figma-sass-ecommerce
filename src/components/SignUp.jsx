import React from 'react'
import { useState } from 'react';
import { Link, Await } from 'react-router-dom';
import axios from "axios"

function SignUp() {
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [isOtpSend, setIsOtpSend] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {             
                    name: fullName,
                    password,
                    email                
            };
            const response = axios.post("https://staging-be-ecom.techserve4u.com/api/user/signup", data);
            console.log("response", response);
            if (response?.data?.isOtpSend) {
                setIsOtpSend(true);
            }

        } catch (error) {
            console.log('error', error);
        }
    }
  return (
    <div className="login-form-container log">
        <form>
            <h1 className="h3 mb-3 fw-normal">Sign up</h1>
            <div className="form-floating">
            <input type="text"  className="form-control" id="floatingInput" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="enter full name" 
                    required/>
                    <label for="floatingInput">Full Name</label>

            </div>

            <div className="form-floating">

            <input type="email" className="form-control" id="floatingInput" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter email" 
                    required/>
            <label for="floatingInput">Email Address</label>
            </div>
            <div className="form-floating">

            <input type="password" className="form-control" id="floatingPassword"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="enter password"
                    required/>
            <label for="floatingPassword">Password</label>
            </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                    <Link to="/sign-in"><p className="pt-3">Already have an account?</p></Link>
                    <p className="mt-5 mb-3 text-muted">© 2024</p>
        </form>
    </div>
//     <div className="login-form-container">
//       {
//         isOtpSend ? ( 
//         <div>Is OTP</div> ) : (

    
  )
}

export default SignUp