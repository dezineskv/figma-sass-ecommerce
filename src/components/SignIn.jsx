import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const data = { password, email };
        const response = axios.post("https://staging-be-ecom.techserve4u.com/api/user/signin", data);
        console.log("response", response);
      

    } catch (error) {
        alert("Error loggin in")
        console.log('error', error);
    }
    }

  return (
    <div className="login-form-container log">
        <form>
            <h1 className="h3 mb-3 fw-normal">Sign in</h1>
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
            {/* <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/> Remember me
            </label>
            </div> */}
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <Link to="/sign-up"><p className="pt-3">Create a new account</p></Link>
            <p className="mt-5 mb-3 text-muted">© 2024</p>
        </form>
    </div>
   )
}

export default SignIn