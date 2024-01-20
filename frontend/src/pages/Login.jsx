//create login page and add it to the routes

import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <h1>Plan Your Itinerary!</h1>
            <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
                <h2>LOGIN</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' className='form-control rounded-0'/>
                    </div>
                    <div>
                        <Link to='/dashboard'><button className='btn btn-success w-100 rounded-0'>Login</button></Link>
                    </div>
                    <div>
                        <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

