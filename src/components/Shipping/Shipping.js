import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { user } = useAuth()
    const [form,setForm] = useState({
        name:user.displayName,
        email:user.email,
        address:user.address,
        phone:user.phone
    })

    return (
        <div className='shipping'>
            <h1>Shipping</h1>
            <form onSubmit={e=>e.preventDefault()}>
                <input type="text" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder='Name'/>
                <input type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder='Email'/>
                <input type="address" value={form.address} onChange={(e)=>setForm({...form,address:e.target.value})} placeholder='Address'/>
                <input type="phone" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} placeholder='Phone'/>
                <button className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default Shipping;