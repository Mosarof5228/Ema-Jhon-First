import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Providers/AuthProvider';
import './Login.css'

const LogIn = () => {
    const { loginHandler, logOut } = useContext(authContext);
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        loginHandler(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Please LogIn</h3>
            <form onSubmit={handleLogIn}>
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