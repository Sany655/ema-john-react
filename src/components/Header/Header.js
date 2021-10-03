import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import './Header.css'

function Header() {
    return (
        <header>
            <img src={logo}/>
            <nav>
                <ul>
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="review">Order Review</Link></li>
                    <li><Link to="inventory">Manage Inventory here</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
