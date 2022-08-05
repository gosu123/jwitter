import { authService } from "fbInstance";
import React, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {target : {name, value}} = event;
        if (name === "Email") setEmail(value);
        else if (name === "Password") setPassword(value);
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        try {
            if (newAccount) {
                // create Account
                const data = await authService.createUserWithEmailAndPassword(email, password);
                console.log(data);
            } else {
                // log in
                const data = await authService.signInWithEmailAndPassword(email, password);
                console.log(data);
            }            
        } catch (error) {
            console.log(error.message);
        }  
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="Email" type="email" placeholder="Email" value={email} onChange={onChange} required/>
                <input name="Password" type="password" placeholder="Password" value={password} onChange={onChange} required/>
                <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
};
export default Auth;