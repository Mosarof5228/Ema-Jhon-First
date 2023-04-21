import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const LogIn = () => {
    return (
        <div className='form-container'>
            <h3 className='form-title'>Please LogIn</h3>
            <form action="">
                <div className='form-control'>
                    <label htmlFor='email'>Email </label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input className='login-btn' type="submit" value="Log in" />
            </form>
            <p><small>New to Ema-jhon? <Link to='/signup' >Please SignUp</Link> </small></p>
        </div>
    );
};

export default LogIn;