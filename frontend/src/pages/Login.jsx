//create login page and add it to the routes

import React, { useState, use_state } from 'react';
import { Link } from 'react-router-dom';

function Login() {
	// formData store user email and password
	const [formData, setFormData] = useState ({
		email: '',
		password: ''
	});

	// error stores error
	const [errors, seterrors] = useState({});

	const handleInputChange = (event) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	// validate email and password fields
	const validateForm = () => {
		let isValid = true;
		const newErrors = {};
	
		// Validate email
		if (!formData.email) {
			newErrors.email = "Email is required";
			isValid = false;
		}
	
		// Validate password
		if (!formData.password) {
			newErrors.password = "Password is required";
			isValid = false;
		}
	
		setErrors(newErrors);
		return isValid;
	};

	// prevents default submission
	const handleSubmit = (e) => {
		e.preventDefault();
	
		if (validateForm()) {
			console.log("Form data:", formData);
			setSubmitted(true);
		} else {}
	};

	const isFormValid = Object.keys(errors).length === 0;

    return (
        <div>
            <h1>Plan Your Itinerary!</h1>
            <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
                <h2>LOGIN</h2>
				{submitted ? (<div className="success-message">Login successful!</div>) : (
					<form onSubmit={handleSubmit}>
						<div className='mb-3'>
							<label htmlFor='email'><strong>Email</strong></label>
							<input type='email' placeholder='Enter Email' value={formData.email} onChange={handleInputChange} className='form-control rounded-0'/>
							{errors.email && <div className="error">{errors.email}</div>}
						</div>
						<div className='mb-3'>
							<label htmlFor='password'><strong>Password</strong></label>
							<input type='password' placeholder='Enter Password' value={formData.password} onChange={handleInputChange} className='form-control rounded-0'/>
							{errors.password && <div className="error">{errors.password}</div>}
						</div>
						<div>
							<Link to='/dashboard'><button className='btn btn-success w-100 rounded-0'>Login</button></Link>
						</div>
						<div>
							<Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
						</div>
					</form>
				)}
            </div>
        </div>
    );
};

export default Login;

