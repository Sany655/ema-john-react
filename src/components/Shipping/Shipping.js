import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const Shipping = () => {
    const savedCart = getStoredCart()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const [form, setForm] = useState({
        name: user.displayName,
        email: user.email,
        address: '',
        phone: ''
    })
    const history = useHistory();
    function handleSubmit(e) {
        setLoading(true)
        e.preventDefault()
        form.order = savedCart;
        axios.post("/orders", form).then(data => {
            setLoading(false)
            alert('Order placed succesfully');
            clearTheCart()
            history.push('/')
        });
    }
    if (loading) {
        return (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'70vh'}}>
                <img  src='./spin.gif'/>
            </div>
        )
    } else {
        return (
            <div className='shipping'>
                <h1>Shipping</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder='Name' />
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder='Email' />
                    <input type="address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder='Address' />
                    <input type="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder='Phone' />
                    <button className='btn'>Submit</button>
                </form>
            </div>
        );
    }
};

export default Shipping;