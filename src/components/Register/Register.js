import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
    return (
        <div className='register'>
            <h1>Please Register</h1>
            <form >
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type="submit" className='btn'>Register</button>
                <Link to='/login'>Alredy have an account?</Link>
                <button className='btn'>Enter With Google <i className="fab fa-google"></i></button>
            </form>
        </div>
    )
}

export default Register
