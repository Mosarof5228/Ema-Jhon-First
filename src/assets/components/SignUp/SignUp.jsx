import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const [error, setError] = useState("");
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        // form.reset()
        console.log(email, password, confirmPassword)
        if (password !== confirmPassword) {
            setError("Password did not matched")
            return;
        }
        else if (password.length < 6) {
            setError("Password has to be minimum 6 characters")
            return;
        }
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Please Sign Up</h3>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor='email'>Email </label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='login-btn' type="submit" value="Sign up" />
            </form>
            <p><small>Already Have an Account? <Link to='/login' >Please login</Link> </small></p>

            <p className='signUP-error-text'>{error}</p>
        </div>
    );
};

export default SignUp;