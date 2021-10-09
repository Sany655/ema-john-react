import React from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import './Login.css'

const Login = () => {
    const { signinUsingGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from||'/';
    const handleGoogleLogin = () => {
        signinUsingGoogle()
        .then((result)=>{
            history.push(redirect_url)
        })
    }
    return (
        <div className='login'>
            <h1>Please Login</h1>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="email" placeholder='Login' />
                <input type="password" placeholder='Password' />
                <button type="submit" className='btn'>Login</button>
                <Link to='/register'>New user?</Link>
                <button onClick={handleGoogleLogin} className='btn'>Enter With Google <i className="fab fa-google"></i></button>
            </form>
        </div>
    )
}

export default Login
