import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
function Order() {
    const history = useHistory()
    const { user } = useAuth()
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`,{
            headers:{
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        }).
        then(res=>{
            return res.status === 200?res.json():history.push('/login')
        }).
        then(data=>{
            setOrders(data)
            console.log(data);
        });
    },[])
    return (
        <div>
            <h1>Total placed orders {orders.length}</h1>
            <ol>
                {
                    orders.map(order=>(
                        <li key={order._id}>
                            <div>
                                {order.email}
                            </div>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Order
