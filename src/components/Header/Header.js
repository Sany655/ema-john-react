import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import logo from '../../images/logo.png'
import './Header.css'

function Header() {
    const { user, logout } = useAuth()
    return (
        <header>
            <img src={logo} alt='Logo'/>
            <nav>
                <ul>
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="review">Order Review</Link></li>
                    {/* <li><Link to="inventory">Manage Inventory here</Link></li> */}
                    <li><Link to="/order">My Orders</Link></li>
                    {
                        !user.uid?(
                            <>
                            <li><Link to="login">Login</Link></li>
                            <li><Link to="register">Register</Link></li>
                            </>
                        ):(
                            <>
                            <li>{user.displayName}</li>
                            <li><button onClick={logout}>Logout</button></li>
                            </>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header
