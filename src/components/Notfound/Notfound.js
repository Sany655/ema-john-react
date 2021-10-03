import React from 'react'
import { useLocation } from 'react-router-dom'
import './Notfound.css'

function Notfound() {
    const location = useLocation()
    return (
        <div className='notfound'>
            <h1>404</h1>
            <p>the url '{location.pathname}' you looking for is not found</p>
        </div>
    )
}

export default Notfound
